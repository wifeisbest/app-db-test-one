const express = require('express');
const router = express.Router();

const register = require('../app/controllers/registerController');

router.get('/',register.index);


module.exports =router;
