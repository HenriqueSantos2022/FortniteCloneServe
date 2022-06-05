const express = require('express');
const router = express.Router();
const Users = require('../controllers/users');

router.get('/signup', Users.signup);
router.get('/rota2', Users.rota2);

module.exports = router; 
