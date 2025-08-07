// app_server/routes/index.js
var express = require('express');
var router = express.Router();
var ctrlIndex = require('../controllers/index');

router.get('/', ctrlIndex.index);

module.exports = router;
