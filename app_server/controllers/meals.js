// app_server/controllers/meals.js
module.exports.meals = function(req, res) {
    res.render('meals', { title: 'Meals - Travlr Getaways' });
};
