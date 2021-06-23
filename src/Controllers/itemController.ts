import { Response, Request } from 'express';
import { container } from 'tsyringe';
import ItemService from '../services/itemService';

export const create = async (req: Request, res: Response): Promise<Response> => {
    const itemData = req.body;
    const itemService = container.resolve(ItemService);
    const response = await itemService.create(itemData);

    return res.status(201).json(response);
};
