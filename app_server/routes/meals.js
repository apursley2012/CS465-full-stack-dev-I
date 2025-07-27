// app_server/routes/meals.js
var express = require('express');
var router = express.Router();
var ctrlMeals = require('../controllers/meals');

router.get('/meals', ctrlMeals.meals);

module.exports = router;
