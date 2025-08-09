// app_server/routes/index.js
var express = require('express');
var router  = express.Router();
var ctrl    = require('../controllers/main');

router.get('/', ctrl.index);

module.exports = router;
