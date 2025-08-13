// app_server/routes/contact.js
var express = require('express');
var router = express.Router();
var ctrlContact = require('../controllers/contact');

router.get('/contact', ctrlContact.contact);

module.exports = router;
