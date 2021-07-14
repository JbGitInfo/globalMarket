import Item from '../../database/entities/item';
import { IItemInterface } from '../../interfaces/item';
import { ItemRequestGetAllInterface } from '../../interfaces/item';

export default interface IItemRepository {
    create(itemData: IItemInterface): Promise<Item>;
    getAll(
        queryParams: ItemRequestGetAllInterface,
    ): Promise<{ data: Item[]; count: number }>;
}
