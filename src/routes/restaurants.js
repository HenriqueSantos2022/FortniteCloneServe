const express = require('express');
const Restaurants = require('../controllers/restaurants');

const router = express.Router();
router.post('/', Restaurants.create);
router.get('/:id', Restaurants.get);
router.put('/:id', Restaurants.update);
router.delete('/:id', Restaurants.delete);
router.get('/list/:owner', Restaurants.list);
module.exports = router;
