// =====================================================================
// IMPORTS
// =====================================================================
const Users = require('../models/users');

// =====================================================================
// EXPORTS CRUD
// =====================================================================
exports.signup = async (req, res, next) => {
  try {
    const user = await Users.create(req.body);
    delete user.password;
    res.json({ user });
  } catch (err) {
    const error = new Error(err);
    error.status = error.statusCode;
    error.code = err.code;
    next(error);
  }
};

exports.signin = async (req, res, next) => {
  try {
    const user = await Users.get(req.body.email);

    if (user && user.password === req.body.password) {
      delete user.password;
      res.json({ user });
    } else {
      const error = new Error('Usuário não encontardo, e-mail ou senha não conferem');
      error.status = 200;
      next(error);
    }
  } catch (err) {
    const error = new Error(err);
    error.status = error.statusCode;
    next(error);
  }
};
