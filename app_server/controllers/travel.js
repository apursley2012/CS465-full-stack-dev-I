const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

module.exports.travel = async function(req, res) {
  try {
    const trips = await Trip.find({});
    res.render('travel', {
      title: 'Travlr Getaways',
      trips
    });
  } catch (err) {
    console.log(err);
    res.render('travel', {
      title: 'Travlr Getaways',
      trips: []
    });
  }
};
