const express = require('express');
const Customer = require('../controllers/customers');

const router = express.Router();
router.post('/', Customer.create);
router.get('/:id', Customer.get);
router.put('/:id', Customer.update);
router.delete('/:id', Customer.delete);
router.get('/list/:owner', Customer.list);
module.exports = router;
