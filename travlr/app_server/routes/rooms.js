// app_server/routes/rooms.js
var express = require('express');
var router = express.Router();
var ctrlRooms = require('../controllers/rooms');

router.get('/rooms', ctrlRooms.rooms);

module.exports = router;
