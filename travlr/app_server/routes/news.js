// app_server/routes/news.js
var express = require('express');
var router = express.Router();
var ctrlNews = require('../controllers/news');

router.get('/news', ctrlNews.news);

module.exports = router;
