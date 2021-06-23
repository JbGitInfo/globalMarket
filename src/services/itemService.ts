import ItemInterface from '../interfaces/item';
import Item from '../database/entities/item';
import ItemRepository from '../repositories/itemRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class ItemService {
    constructor(
        @inject('ItemRepository')
        private itemRepository: ItemRepository,
    ) {}

    public async create(itemData: ItemInterface): Promise<Item> {
        const item = await this.itemRepository.create(itemData);
        return item;
    }
}
