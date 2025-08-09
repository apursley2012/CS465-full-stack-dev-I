// app_server/controllers/contact.js
const fs = require('fs');
const path = require('path');
const jsonPath = path.join(__dirname, '..', '..', 'data', 'contact.json');

module.exports.contact = (req, res) => {
  const page = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  res.render('contact', {
    title: page.title || 'Contact',
    form: page.form || null,
    company: page.companyInfo || null
  });
};
