
const express = require('express');
const router = express.Router();

const siteRouter = require('../app/controllers/siteControllers');

router.get('/',siteRouter.home);








module.exports = router;
