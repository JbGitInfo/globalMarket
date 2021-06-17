import Item from '../../entities/item';
import {ItemInterface } from '../item';

export default interface IItemRepository {
    create(
        itemData: ItemInterface
    ): Promise<Item>;
}
