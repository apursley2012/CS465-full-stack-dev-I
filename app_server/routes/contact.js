// app_server/routes/contact.js
var express = require('express');
var router  = express.Router();
var ctrl    = require('../controllers/contact');

router.get('/', ctrl.contact); // /contact

module.exports = router;
