//= ====================================================================
// IMPORTS
//= ====================================================================
const Restaurants = require('../models/restaurants');
const Utils = require('../utils/utils');

//= ====================================================================
// EXPORTS CRUD
//= ====================================================================
exports.create = async (req, res, next) => {
  try {
    Utils.sanitize(req.body);

    if (Utils.validateEmail(req.body.email)) {
      const list = await Restaurants.query('owner').eq(req.body.owner).exec();
      if (list.length === 0) {
        const restaurants = await Restaurants.create(req.body);
        res.json({ restaurants });
      } else {
        res.json({ restaurants: list[0] });
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

    const restaurants = await Restaurants.get(req.params.id);
    res.json({ restaurants });
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

    const restaurants = await Restaurants.update({ id: req.params.id }, req.body);
    res.json({ restaurants });
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
    Utils.sanitize(req.params);

    const restaurants = await Restaurants.query('owner').eq(req.params.owner).exec();
    res.json({ restaurants });
  } catch (err) {
    const error = new Error(err);
    error.status = error.statusCode;
    error.code = err.code;
    next(error);
  }
};
