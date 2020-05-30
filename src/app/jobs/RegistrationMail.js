import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    async handle({ data }) {
        const { user: { name, email } } = data; 

        await Mail.sendMail({
            from: `Node-master <${process.env.FROM_MAIL}>`,
            to: `${name} <${email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${name}, bem-vindo aos estudos do leandro`
        });
    }
};