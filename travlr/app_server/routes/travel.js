var express = require('express');
var router = express.Router();
var ctrlTravel = require('../controllers/travel');

router.get('/travel', ctrlTravel.travel);

module.exports = router;
