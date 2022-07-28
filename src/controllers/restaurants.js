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
      if ('useAppDeliverers' in req.body) {
        req.body.useAppDeliverers = req.body.useAppDeliverers === 'true';
      }

      if ('useOwnDeliverers' in req.body) {
        req.body.useOwnDeliverers = req.body.useOwnDeliverers === 'true';
      }

      const restaurants = await Restaurants.create(req.body);
      res.json({ restaurants });
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
    if ('useAppDeliverers' in req.body) {
      req.body.useAppDeliverers = req.body.useAppDeliverers === 'true';
    }

    if ('useOwnDeliverers' in req.body) {
      req.body.useOwnDeliverers = req.body.useOwnDeliverers === 'true';
    }
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
