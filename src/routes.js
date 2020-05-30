import { Router } from 'express';

const routes = Router();

import UserController from './app/controllers/UserController';

routes.post('/user', UserController.store);

export default routes;