// app_server/controllers/index.js
module.exports.index = function(req, res) {
    res.render('index', { title: 'Travlr Getaways' });
};
