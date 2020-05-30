import 'dotenv/config';

import aws from 'aws-sdk';

import Mail from '../lib/Mail';

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
        //Enviar E-mail
       await Mail.sendMail({
            from: `Node-master <${process.env.FROM_MAIL}>`,
            to: `${name} <${email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${name}, bem-vindo aos estudos do leandro`
        });

        req.User = user;

       next();
    }

};

export default new UserController();