const express = require('express');
const router = express.Router();
const hp = require('../controller/Control.js')


router.get('/', hp.kpp)
module.exports = router;