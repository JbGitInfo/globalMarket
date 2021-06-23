import 'reflect-metadata';
import { createConnection } from 'typeorm';
import app from './app';

async function start() {
    await createConnection();
    app.listen(3000);
    console.log('Server running on port 3000!');
}

start();
