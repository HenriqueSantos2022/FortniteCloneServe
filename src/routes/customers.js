const express = require('express');
const customers = require('../controllers/customers');

const router = express.Router();
router.post('/', customers.create);
router.get('/:id', customers.get);
router.put('/:id', customers.update);
router.delete('/:id', customers.delete);
// router.get('/list/:userId', customers.list);
module.exports = router;
