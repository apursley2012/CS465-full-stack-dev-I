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
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
    console.log('Seed complete.');
  } catch (err) {
    console.error('Seed error:', err);
  } finally {
    process.exit(0);
  }
})();
