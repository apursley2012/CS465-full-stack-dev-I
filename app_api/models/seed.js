const path = require('path');
const fs = require('fs');

// Initialize DB & model
require('./db');
const Trip = require('./travlr');

// Load trips from JSON (Module 4 version with extra fields)
const jsonPath = path.join(__dirname, '..', '..', 'data', 'trips.json');
const trips = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

(async () => {
  try {
    // Clear then insert so reseeding is clean
    await Trip.deleteMany();
    console.log('Existing records deleted.');

    // Insert seed data
    await Trip.insertMany(trips);
    console.log('Seed complete.');
 } catch (error) {
    console.error('Error seeding the database:', error);
  }
};
 // Close the MongoDB connection and exit
seedDB()
  .then(async () => {
    await mongoose.connection.close();
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
