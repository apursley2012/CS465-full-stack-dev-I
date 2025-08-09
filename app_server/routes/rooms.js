// app_server/routes/rooms.js
var express = require('express');
var router  = express.Router();
var ctrl    = require('../controllers/rooms');

router.get('/', ctrl.rooms); // /rooms

module.exports = router;
