import { IItemInterface } from '../../interfaces/item';

export default class ItemBuilder {
    item: IItemInterface;

    constructor() {
        this.item = {} as IItemInterface;
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

    public build(): IItemInterface {
        return this.item;
    }
}
