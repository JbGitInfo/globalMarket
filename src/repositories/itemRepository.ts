import 'reflect-metadata';
import { HttpError } from '../utils/errors/HttpError';
import { Repository, getRepository, SelectQueryBuilder } from 'typeorm';
import Item from '../database/entities/item';
import IItemRepository from '../interfaces/repositories/IItemRepository';
import { IItemInterface, ItemRequestGetAllInterface } from '../interfaces/item';

export default class ItemRepository implements IItemRepository {
    private ormRepository: Repository<Item>;
    constructor() {
        this.ormRepository = getRepository(Item);
    }

    private buildFilterGetAll(
        queryParams: ItemRequestGetAllInterface,
    ): SelectQueryBuilder<Item> {
        const { vocation, min_level_required, max_level_required } = queryParams;
        const query = this.ormRepository.createQueryBuilder('items').where('1=1');

        if (min_level_required && max_level_required) {
            if (+max_level_required < +min_level_required)
                throw new HttpError(
                    404,
                    'max_level_required can not be lowest than min_level_required',
                );
            query.andWhere(
                'items.levelRequired Between :min_level_required and :max_gross_value',
                { min_level_required, max_level_required },
            );
        }

        if (vocation) {
            query.andWhere('items.vocation = :vocation', { vocation: vocation });
        }
        return query;
    }

    public async create(itemData: IItemInterface): Promise<any> {
        const item = this.ormRepository.create(itemData);
        await this.ormRepository.save(item);

        return item;
    }

    public async getAll(
        queryParams: ItemRequestGetAllInterface,
    ): Promise<{ data: Item[]; count: number }> {
        const query = await this.buildFilterGetAll(queryParams);
        const [data, count] = await query.getManyAndCount();

        return { data, count };
    }
}
