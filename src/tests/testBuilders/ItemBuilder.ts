import ItemInterface from '../../interfaces/item';

export default class ItemBuilder {
    item: ItemInterface;

    constructor() {
        this.item = {} as ItemInterface;
    }

    public withDescription(description: string): ItemBuilder {
        this.item.description = description;
        return this;
    }

    public withWeight(weight: number): ItemBuilder {
        this.item.weight = weight;
        return this;
    }

    public withLevelRequired(levelRequired: number): ItemBuilder {
        this.item.levelRequired = levelRequired;
        return this;
    }  

    public withVocation(vocation: string): ItemBuilder {
        this.item.vocation = vocation;
        return this;
    }

    public build(): ItemInterface {
        return this.item;
    }
}
