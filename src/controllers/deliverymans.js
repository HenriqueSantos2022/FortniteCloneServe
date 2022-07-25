//= ====================================================================
// IMPORTS
//= ====================================================================
const Deliveryman = require('../models/deliverymans');
const Utils = require('../utils/utils');

//= ====================================================================
// EXPORTS CRUD
//= ====================================================================
exports.create = async (req, res, next) => {
  try {
    Utils.sanitize(req.body);

    if (Utils.validateEmail(req.body.email)) {
      const list = await Deliveryman.query('owner').eq(req.body.owner).exec();
      if (list.length === 0) {
        const deliveryman = await Deliveryman.create(req.body);
        res.json({ deliveryman });
      } else {
        res.json({ deliveryman: list[0] });
      }
    } else {
      const error = new Error('Email não e valido');
      error.status = error.statusCode;
      next(error);
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

    const deliveryman = await Deliveryman.get(req.params.id);
    res.json({ deliveryman });
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

    const deliveryman = await Deliveryman.update({ id: req.params.id }, req.body);
    res.json({ deliveryman });
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

    await Deliveryman.delete(req.params.id);
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

    const deliveryman = await Deliveryman.query('owner').eq(req.params.owner).exec();

    res.json({ deliveryman });
  } catch (err) {
    const error = new Error(err);
    error.status = error.statusCode;
    error.code = err.code;
    next(error);
  }
};
