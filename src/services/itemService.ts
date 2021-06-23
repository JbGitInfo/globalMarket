import ItemInterface from '../interfaces/item';
import Item from '../database/entities/item';
import IItemRepository from '../interfaces/repositories/IItemRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class ItemService {
    constructor(
        @inject('ItemRepository')
        private itemRepository: IItemRepository,
    ) {}

    public async create(itemData: ItemInterface): Promise<Item> {
        const item = await this.itemRepository.create(itemData);
        return item;
    }
}
