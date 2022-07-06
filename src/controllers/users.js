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
    const list = await Users.query('email').eq(req.body.email).exec();
    if (list.length > 0) {
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
    const list = await Users.query('email').eq(req.body.email).exec();
    if (list.length > 0 && (await bcrypt.compareSync(req.body.password, list[0].password))) {
      delete list[0].password;
      res.json({ user: list[0] });
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
