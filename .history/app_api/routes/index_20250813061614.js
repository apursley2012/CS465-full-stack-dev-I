const express = require('express'); //express app
const router = express.Router();

// where we import the controllers we will route
const tripsController = require('../controllers/trips');

// define route for trips endpoint
// /api/trips
router
    .route('/trips')
    // READ all
    .get(tripsController.tripsList)
    // CREATE one
    .post(tripsController.tripsAddTrip);

router
    // /api/trips/:tripCode
    .route('/trips/:tripCode')
    // READ one
    .get(tripsController.tripsFindByCode)
    // UPDATE one
    .put(tripsController.tripsUpdateTrip)
    // DELETE one
    .delete(tripsController.tripsDeleteTrip);

module.exports = router;
