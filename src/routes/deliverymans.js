const express = require('express');
const deliveryman = require('../controllers/deliverymans');

const router = express.Router();
router.post('/', deliveryman.create);
router.get('/:id', deliveryman.get);
router.put('/:id', deliveryman.update);
router.delete('/:id', deliveryman.delete);
router.get('/list/:owner', deliveryman.list);
module.exports = router;
