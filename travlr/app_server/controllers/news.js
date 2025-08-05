// app_server/controllers/news.js
module.exports.news = function(req, res) {
    res.render('news', { title: 'News - Travlr Getaways' });
};
