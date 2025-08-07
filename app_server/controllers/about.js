// app_server/controllers/about.js
module.exports.about = function(req, res) {
    res.render('about', { title: 'About - Travlr Getaways' });
};
