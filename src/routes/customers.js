const express = require('express');
const Client = require('../controllers/customers');

const router = express.Router();
router.post('/', Client.create);
router.get('/:id', Client.get);
router.put('/:id', Client.update);
router.delete('/:id', Client.delete);
// router.get('/list/:userId', Client.list);
module.exports = router;
