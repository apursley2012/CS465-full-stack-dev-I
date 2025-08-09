// app_server/routes/meals.js
var express = require('express');
var router  = express.Router();
var ctrl    = require('../controllers/meals');

router.get('/', ctrl.meals); // /meals

module.exports = router;
