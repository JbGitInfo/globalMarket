import { Router } from 'express';
import swaggerUI from 'swagger-ui-express';
import jsyaml from 'js-yaml';
import { resolve } from 'path';
import fs from 'fs';
import * as ItemController from '../controllers/itemController';

const router = Router();
const docPath = resolve(`src`, 'openapi.yaml');
const openApi: any = jsyaml.load(fs.readFileSync(docPath, 'utf-8'));

router.post(
    '/api/v1/item',
    // middleware.validatorMiddleware({
    //     body: postItemSchema
    // }),
    ItemController.create,
);
router.get('/api/v1/items', ItemController.getAll);

router.use('/docs', swaggerUI.serve, swaggerUI.setup(openApi));

export default router;
