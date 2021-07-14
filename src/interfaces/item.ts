export interface IItemInterface {
    description: string;
    weight: number;
    levelRequired: number;
    vocation: string;
}

export interface FindAllInterface {
    queryParams: ItemRequestGetAllInterface;
}

export interface ItemRequestGetAllInterface {
    vocation?: string;
    max_level_required?: number;
    min_level_required?: number;
}
