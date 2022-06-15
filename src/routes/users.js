const express = require('express');
const Users = require('../controllers/users');

const router = express.Router();
router.post('/signup', Users.signup);
router.post('/signin', Users.signin);

module.exports = router;
