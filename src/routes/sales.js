const express = require('express');
const Sales = require('../controllers/sales');

const router = express.Router();
router.post('/', Sales.create);
router.get('/:id', Sales.get);
router.put('/:id', Sales.update);
router.delete('/:id', Sales.delete);
router.get('/list/:owner', Sales.list);
module.exports = router;
