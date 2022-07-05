//= ====================================================================
// IMPORTS
//= ====================================================================
const bcrypt = require('bcrypt');
const Users = require('../models/users');
const Utils = require('../utils/utils');

//= ====================================================================
// EXPORTS CRUD
//= ====================================================================
exports.signup = async (req, res, next) => {
  try {
    Utils.sanitize(req.body);

    // Realizando limpeza antes de validar
    Utils.sanitize(req.body);

    // Se o email nao for valido retornar msg de erro e terminar a requisição
    if (!Utils.validateEmail(req.body.email)) {
      const error = new Error('email nao e valido');
      error.status = error.statusCode;
      next(error);
      return;
    }

    // Se o email ja for cadastardo retornar msg de erro e terminar
    if (await Users.get(req.body.email)) {
      const error = new Error('email ja cadastrado');
      error.status = error.statusCode;
      next(error);
      return;
    }

    // Se o email nao for cadastrado retornar msg de errro e termiar a requisição
    req.body.password = await bcrypt.hash(req.body.password, 10);
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
    Utils.sanitize(req.body);
    const user = await Users.query('email').eq(req.body.email).exec();
    if (user && (await bcrypt.compareSync(req.body.password, user.password))) {
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
