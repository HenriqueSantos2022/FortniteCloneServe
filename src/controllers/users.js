//=====================================================================
// IMPORTS
//=====================================================================
const Users = require("../models/users");

//=====================================================================
// EXPORTS CRUD 
//=====================================================================

exports.signup = (req, res,) => {
    //const user = await Users.create(req.body);
    //  return res.json({ user });
    res.send("signup");
    return
};

exports.rota2 = (req, res,) => {
    //const user = await Users.create(req.body);
    //  return res.json({ user });
    res.send(Users.signup());
    return
};

