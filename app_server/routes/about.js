// app_server/routes/about.js
var express = require('express');
var router = express.Router();
var ctrlAbout = require('../controllers/about');

router.get('/about', ctrlAbout.about);

module.exports = router;
