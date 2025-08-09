// app_server/routes/travel.js
var express = require('express');
var router  = express.Router();
var ctrl    = require('../controllers/travel');

router.get('/', ctrl.travel); // mounted at /travel

module.exports = router;
