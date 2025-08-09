// app_server/routes/news.js
var express = require('express');
var router  = express.Router();
var ctrl    = require('../controllers/news');

router.get('/', ctrl.news); // /news

module.exports = router;
