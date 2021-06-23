import { Router } from 'express';
import * as ItemController from '../Controllers/itemController';

const router = Router();

router.post('/api/v1/item', ItemController.create);

export default router;
