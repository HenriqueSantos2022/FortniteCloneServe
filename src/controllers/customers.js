//= ====================================================================
// IMPORTS
//= ====================================================================
const Client = require('../models/customers');
const Utils = require('../utils/utils');
//= ====================================================================
// EXPORTS CRUD
//= ====================================================================
exports.create = async (req, res, next) => {
  try {
    Utils.sanitize(req.body);

    const client = await Client.create(req.body);
    res.json({ client });
  } catch (err) {
    const error = new Error(err);
    error.status = error.statusCode;
    error.code = err.code;
    next(error);
  }
};

exports.get = async (req, res, next) => {
  try {
    Utils.sanitize(req.params);

    const client = await Client.get(req.params.id);
    res.json({ client });
  } catch (err) {
    const error = new Error(err);
    error.status = error.statusCode;
    error.code = err.code;
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    Utils.sanitize(req.params);
    Utils.sanitize(req.body);

    const client = await Client.update({ id: req.params.id }, req.body);
    res.json({ client });
  } catch (err) {
    const error = new Error(err);
    error.status = error.statusCode;
    error.code = err.code;
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    Utils.sanitize(req.params);

    await Client.delete(req.params.id);
    res.json({});
  } catch (err) {
    const error = new Error(err);
    error.status = error.statusCode;
    error.code = err.code;
    next(error);
  }
};

exports.list = async (req, res, next) => {
  try {
    Utils.sanitize(req.params);

    res.json({ todo: new Date(), Clientid: req.params.clientid });
  } catch (err) {
    const error = new Error(err);
    error.status = error.statusCode;
    error.code = err.code;
    next(error);
  }
};
