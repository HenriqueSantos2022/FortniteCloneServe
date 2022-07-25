//= ====================================================================
// IMPORTS
//= ====================================================================

const Vehicles = require('../models/vehicles');
const Utils = require('../utils/utils');
//= ====================================================================
// EXPORTS CRUD
//= ====================================================================
exports.create = async (req, res, next) => {
  try {
    Utils.sanitize(req.body);

    const vehicles = await Vehicles.create(req.body);
    res.json({ vehicles });
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

    const vehicles = await Vehicles.get(req.body.id);
    res.json({ vehicles });
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

    const vehicles = await Vehicles.update({ id: req.params.id }, req.body);
    res.json({ vehicles });
  } catch (err) {
    const error = new Error(err);
    error.statuscode = error.statusCode;
    error.code = err.code;
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    Utils.sanitize(req.params);

    await Vehicles.delete(req.params.id);
    res.json({});
  } catch (err) {
    const error = new Error(err);
    error.statuscode = error.statusCode;
    error.code = err.code;
    next(error);
  }
};

exports.list = async (req, res, next) => {
  try {
    Utils.sanitize(req.body);

    const vehicles = await Vehicles.query('owner').eq(req.params.owner).exec();
    res.json({ vehicles });
  } catch (err) {
    const error = new Error(err);
    error.satus = error.statusCode;
    error.code = err.code;
    next(error);
  }
};
