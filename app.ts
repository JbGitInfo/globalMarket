import express from 'express';
import itemRoutes from './src/routes/item.routes';
import bodyParser from 'body-parser';

class Application{
    public app: express.Application;
    constructor() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.setupRoutes();
    }
    private setupRoutes() {
        this.app.use(itemRoutes)
    }

}

export default new Application().app;
