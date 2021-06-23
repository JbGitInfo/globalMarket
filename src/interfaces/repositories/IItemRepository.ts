import Item from '../../database/entities/item';
import ItemInterface from '../../interfaces/item';

export default interface IItemRepository {
    create(itemData: ItemInterface): Promise<Item>;
}
