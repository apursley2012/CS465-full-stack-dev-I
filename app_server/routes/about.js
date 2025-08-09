// app_server/routes/about.js
var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/about');

router.get('/', ctrl.about); // /about

module.exports = router;
