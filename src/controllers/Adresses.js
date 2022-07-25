//= ====================================================================
// IMPORTS
//= ====================================================================
const Adresses = require('../models/Adresses');
const Utils = require('../utils/utils');

//= ====================================================================
// EXPORTS CRUD
//= ====================================================================
exports.create = async (req, res, next) => {
  try {
    Utils.sanitize(req.body);

    const adresses = await Adresses.create(req.body);
    res.json({ adresses });
  } catch (err) {
    const error = new Error(err);
    error.status = error.StatusCode;
    error.code = err.code;
    next(error);
  }
};

exports.get = async (req, res, next) => {
  try {
    Utils.sanitize(req.params);

    const adresses = await Adresses.get(req.params.id);
    res.json({ adresses });
  } catch (err) {
    const error = new Error(err);
    error.status = error.StatusCode;
    error.code = err.code;
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    Utils.sanitize(req.params);
    Utils.sanitize(req.body);

    const adresses = await Adresses.update({ id: req.params.id }, req.body);
    res.json({ adresses });
  } catch (err) {
    const error = new Error(err);
    error.status = error.StatusCode;
    error.code = err.code;
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    Utils.sanitize(res.params);

    await Adresses.delete(req.body.id);
    res.json({});
  } catch (err) {
    const error = new Error(err);
    error.status = error.StatusCode;
    error.code = err.code;
    next(error);
  }
};

exports.list = async (req, res, next) => {
  try {
    Utils.sanitize(req.params);

    const adresses = await Adresses.query('owner').eq(req.body.email).exec();
    res.json({ adresses });
  } catch (err) {
    const error = new Error(err);
    error.status = error.StatusCode;
    error.code = err.code;
    next(error);
  }
};
