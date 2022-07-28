//= ====================================================================
// IMPORTS
//= ====================================================================
const Customer = require('../models/customers');
const Utils = require('../utils/utils');
//= ====================================================================
// EXPORTS CRUD
//= ====================================================================
exports.create = async (req, res, next) => {
  try {
    Utils.sanitize(req.body);
    const list = await Customer.query('owner').eq(req.body.owner).exec();
    if (list.length === 0) {
      const customer = await Customer.create(req.body);
      res.json({ customer });
    } else {
      res.json({ customer: list[0] });
    }
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

    const customers = await Customer.get(req.params.id);
    res.json({ customers });
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

    const customers = await Customer.update({ id: req.params.id }, req.body);
    res.json({ customers });
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

    await Customer.delete(req.params.id);
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

    const customers = await Customer.query('id').eq(req.params.id).exec();
    res.json({ customers });
  } catch (err) {
    const error = new Error(err);
    error.status = error.statusCode;
    error.code = err.code;
    next(error);
  }
};
