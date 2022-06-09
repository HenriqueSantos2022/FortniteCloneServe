//=====================================================================
// IMPORTS
//=====================================================================
const Users = require("../models/users");

//=====================================================================
// EXPORTS CRUD 
//=====================================================================
exports.signup = async (req, res, next) => {
    try {
        const user = await Users.create(req.body);
        delete user.password
        return res.json({ user });
    } catch (error) {
        error = new Error(error);
        error.status = error.statusCode;
        error.code = error.code;
        next(error);
    }
};

exports.signin = async (req, res, next) => {
    try {
        const user = await Users.get(req.body.email);

        if (user && user.password === req.body.password) {
            delete user.password;
            return res.json({ user });
        } else {
            error = new Error("Usuário não encontardo, e-mail ou senha não conferem");
            error.status = 200;
            next(error);
        }
    } catch (error) {
        error = new Error(error);
        error.status = error.statusCode;
        next(error);
    }
};