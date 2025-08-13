const express = require('express'); //express app
const router = express.Router();

// where we import the controllers we will route
const tripsController = require('../controllers/trips');

// define route for trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList) //Get Method routes tripList
    .post(tripsController.tripsAddTrip); //Post Method Adds a Trip

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

module.exports = router;