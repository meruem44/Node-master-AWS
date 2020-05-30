import 'dotenv/config';

import Queue from '../lib/queue';

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
        await Queue.add('RegistrationMail',{ user });

        req.User = user;

       next();
    }

};

export default new UserController();