const express = require('express');
const Courier = require('../controllers/couriers');

const router = express.Router();
router.post('/', Courier.create);
router.get('/:id', Courier.get);
router.put('/:id', Courier.update);
router.delete('/:id', Courier.delete);
// router.get('/list/:userId', Entregador.list);
module.exports = router;
