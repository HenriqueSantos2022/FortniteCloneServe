const express = require('express');
const Products = require('../controllers/products');

const router = express.Router();
router.post('/', Products.create);
router.get('/:id', Products.get);
router.put('/:id', Products.update);
router.delete('/:id', Products.delete);
router.get('/list/:owner', Products.list);
module.exports = router;
