const express = require('express');
const clientes = require('../controllers/clientes');

const router = express.Router();
router.post('/', clientes.create);
router.get('/:id', clientes.get);
router.put('/:id', clientes.update);
router.delete('/:id', clientes.delete);
// router.get('/list/:userId', clientes.list);
module.exports = router;
