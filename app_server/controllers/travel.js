// app_server/controllers/travel.js
const fs = require('fs');
const path = require('path');
const jsonPath = path.join(__dirname, '..', '..', 'data', 'trips.json');

module.exports.travel = (req, res) => {
  const trips = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  res.render('travel', { title: 'Travlr Getaways', trips });
};