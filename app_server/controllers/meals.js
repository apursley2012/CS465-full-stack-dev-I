const fs = require('fs');
const path = require('path');
const jsonPath = path.join(__dirname, '..', '..', 'data', 'meals.json');

module.exports.meals = (req, res) => {
  const meals = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  res.render('meals', { title: 'Meals', meals });
};
