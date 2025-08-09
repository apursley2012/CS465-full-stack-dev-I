// app_server/controllers/about.js
const fs = require('fs');
const path = require('path');
const jsonPath = path.join(__dirname, '..', '..', 'data', 'about.json');

module.exports.about = (req, res) => {
  const page = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  res.render('about', {
    title: page.title || 'About',
    heading: page.heading || '',
    content: page.content || [],
    sections: page.sections || [],
    community: page.community || null,
    templateDetails: page.templateDetails || null
  });
};
