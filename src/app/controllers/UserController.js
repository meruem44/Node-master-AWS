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
        //Enviar SMS

        return res.json(user);
    }

};

export default new UserController();