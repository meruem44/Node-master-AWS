import 'dotenv/config';

import Mail from '../lib/Mail';

class UserController {
    async store(req,res) {
        const { name, email, password, cellPhone } = req.body;

        const user = {
            name,
            email,
            password,
            cellPhone
        }
        //Enviar E-mail
       await Mail.sendMail({
            from: `Node-master <${process.env.FROM_MAIL}>`,
            to: `${name} <${email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${name}, bem-vindo aos estudos do leandro`
        });
        //Enviar SMS

        return res.json(user);
    }

};

export default new UserController();