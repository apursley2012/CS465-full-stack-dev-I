const mongoose = require('mongoose');

// Define the trip schema
const tripSchema = new mongoose.Schema({
  code: { type: String, required: true, index: true, unique: true }, // Ensures trip codes are unique
  name: { type: String, required: true, index: true },
  length: { type: String, required: true },
  start: { type: Date, required: true },
  resort: { type: String, required: true },
  perPerson: { type: Number, required: true }, // Changed to `Number` for numeric values
  image: { type: String, required: true },
  description: { type: String, required: true }
}, { timestamps: true }); // Adds `createdAt` and `updatedAt` fields automatically

// Create and export the Trip model
const Trip = mongoose.model('trips', tripSchema);
module.exports = Trip;// Register and export model
module.exports = Trip;
