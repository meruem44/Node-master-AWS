import 'dotenv/config';

import express, { json } from 'express';
import cors from 'cors';

class App {
    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(cors());
        this.server.use(json());
    };

    routes() {
        
    };
}

export default new App().server;