var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json',
'utf8'));

/* Get travel view */
const travel = (req, res) => {
    res
}

module.exports.travel = function(req, res) {
    res.render('travel', { title: 'Travlr Getaways' });
};
