import { Repository, getRepository } from 'typeorm';
import Item from '../entities/item';
import IItemRepository from '../interfaces/repositories/IItemRepository';
import { ItemInterface } from '../interfaces/item';

export default class ItemRepository implements IItemRepository {
    private ormRepository: Repository<Item>;
    
    public async create(itemData: ItemInterface): Promise<Item> {
        const item = this.ormRepository.create(itemData);

        await this.ormRepository.save(item);

        return item;
    }
}    