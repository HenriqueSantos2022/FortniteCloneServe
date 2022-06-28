String.prototype.sanitize = function () {
  return this.replace(/  +/g, ' ').trim();
};
// =====================================================================
// IMPORTS
// =====================================================================
const Restaurants = require('../models/restaurants');

// =====================================================================
// EXPORTS CRUD
// =====================================================================
exports.create = async (req, res, next) => {
  try {
    req.body.name = req.body.name.sanitize();
    req.body.cnpj = req.body.cnpj.sanitize();
    const restaurant = await Restaurants.create(req.body);
    res.json({ restaurant });
  } catch (err) {
    const error = new Error(err);
    error.status = error.statusCode;
    error.code = err.code;
    next(error);
  }
};

exports.get = async (req, res, next) => {
  try {
    const restaurant = await Restaurants.get(req.params.id);
    res.json({ restaurant });
  } catch (err) {
    const error = new Error(err);
    error.status = error.statusCode;
    error.code = err.code;
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const restaurant = await Restaurants.update({ id: req.params.id }, req.body);
    res.json({ restaurant });
  } catch (err) {
    const error = new Error(err);
    error.status = error.statusCode;
    error.code = err.code;
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    await Restaurants.delete(req.params.id);
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
    res.json({ todo: new Date(), userId: req.params.userId });
  } catch (err) {
    const error = new Error(err);
    error.status = error.statusCode;
    error.code = err.code;
    next(error);
  }
};
