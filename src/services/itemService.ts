import  ItemInterface  from "../interfaces/item";
import Item from "../entities/item"
import ItemRepository from "../repositories/itemRepository"

export default class ItemService {
    private itemRepository: ItemRepository;
    constructor(){
         this.itemRepository = new ItemRepository();
    }
    
    public async create(
        itemData: ItemInterface
    ): Promise<Item> {
        const item = await this.itemRepository.create(itemData);
        return item;
    }
    
}    