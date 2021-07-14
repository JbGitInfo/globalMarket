import { Response, Request } from 'express';
import { container } from 'tsyringe';
import ItemService from '../services/itemService';
import { ItemRequestGetAllInterface, IItemInterface } from '../interfaces/item';
import { getAllItemSchema, postItemSchema } from '../utils/item/validators';

export const create = async (req: Request, res: Response): Promise<Response> => {
    const itemData = req.body;
    const itemService = container.resolve(ItemService);
    const response = await itemService.create(itemData);

    return res.status(201).json({ id: response.id });
};

export const getAll = async (req: Request, res: Response): Promise<Response> => {
    const query = (await getAllItemSchema.validate(req.query, {
        stripUnknown: true,
    })) as ItemRequestGetAllInterface;
    const itemService = container.resolve(ItemService);
    const response = await itemService.getAll({ queryParams: query });

    return res.status(200).json(response);
};
