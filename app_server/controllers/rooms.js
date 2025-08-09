// app_server/controllers/rooms.js
const fs = require('fs');
const path = require('path');
const jsonPath = path.join(__dirname, '..', '..', 'data', 'rooms.json');

module.exports.rooms = (req, res) => {
  const rooms = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  res.render('rooms', { title: 'Rooms', rooms });
};
