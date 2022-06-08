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


