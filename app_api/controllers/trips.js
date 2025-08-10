// app_api/controllers/trips.js
require('../models/travlr'); // Ensure schema is loaded before we call mongoose.model()
const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

// GET /api/trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({}).exec();
    return res.status(200).json(trips);
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// GET /api/trips/:tripCode
const tripsFindByCode = async (req, res) => {
  try {
    const { tripCode } = req.params;
    const trip = await Trip.findOne({ code: tripCode }).exec();
    if (!trip) return res.status(404).json({ message: 'Trip not found' });
    return res.status(200).json(trip);
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = { tripsList, tripsFindByCode };
