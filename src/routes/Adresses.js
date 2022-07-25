const express = require('express');
const adresses = require('../controllers/Adresses');

const router = express.Router();
router.post('/', adresses.create);
router.get('/:id', adresses.get);
router.put('/:id', adresses.update);
router.delete('/:id', adresses.delete);
router.get('/list/:owner', adresses.list);
module.exports = router;
