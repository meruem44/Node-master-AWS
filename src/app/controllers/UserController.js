import 'dotenv/config';

import { mailQueue } from '../lib/queue';

class UserController {
    async store(req,res, next) {
        const { name, email, password, cellPhone : PhoneNumber, message : Message } = req.body;

        req.sendCell = {
            Message,
            PhoneNumber
        };

        const user = {
            name,
            email,
            password,
            cellPhone: PhoneNumber
        }
        //Adicionar job de enviar E-mail
        await mailQueue.add({ user });

        req.User = user;

       next();
    }

};

export default new UserController();