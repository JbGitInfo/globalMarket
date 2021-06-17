import  { Router }  from 'express';
import ItemController  from '../Controllers/itemController'

const router = Router();

router.post('/api/v1/item', ItemController.create);