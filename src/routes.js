import { Router } from 'express';

const routes = Router();

import UserController from './app/controllers/UserController';
import SendSMS from './app/middlewares/sendSMS';

routes.post('/user', UserController.store, SendSMS.send);

export default routes;