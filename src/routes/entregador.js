const express = require('express');
const Entregador = require('../controllers/entregador');

const router = express.Router();
router.post('/', Entregador.create);
router.get('/:id', Entregador.get);
router.put('/:id', Entregador.update);
router.delete('/:id', Entregador.delete);
// router.get('/list/:userId', Entregador.list);
module.exports = router;
