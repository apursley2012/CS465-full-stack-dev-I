// app_server/controllers/main.js
const fs = require('fs');
const path = require('path');
const jsonPath = path.join(__dirname, '..', '..', 'data', 'index.json');

module.exports.index = (req, res) => {
  const page = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  res.render('index', {
    title: page.title || 'Home',
    intro: page.intro || [],
    latestBlog: page.latestBlog || [],
    testimonials: page.testimonials || []
  });
};
