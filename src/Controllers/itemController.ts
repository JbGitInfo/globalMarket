import { Response, Request } from 'express';
import ItemService  from '../services/itemService'

const itemService = new ItemService();
export default class ItemController {
    public static async create(req: Request, res: Response): Promise<Response> {
        const itemData  = req.body;
        const response = await itemService.create(itemData);

        return res.status(201).json(response);
    }
}