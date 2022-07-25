const express = require('express');
const Vehicles = require('../controllers/vehicles');

const router = express.Router();
router.post('/', Vehicles.create);
router.get('/:id', Vehicles.get);
router.put('/:id', Vehicles.update);
router.delete('/:id', Vehicles.delete);
router.get('/list/:owner', Vehicles.list);
module.exports = router;
