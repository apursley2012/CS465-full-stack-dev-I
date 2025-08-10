// app_server/controllers/travel.js
// PUBLIC controller: renders the Travel page by fetching your API.

const VIEW_NAME = 'travel'; // template file is app_server/views/travel.hbs
const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = { method: 'GET', headers: { Accept: 'application/json' } };

module.exports.travel = async function (req, res) {
  fetch(tripsEndpoint, options)
    .then(r => r.json())
    .then(json => {
      if (!Array.isArray(json)) {
        return res.status(502).render(VIEW_NAME, {
          title: 'Travlr Getaways',
          trips: [],
          message: 'Unexpected API response.'
        });
      }
      if (json.length === 0) {
        return res.status(200).render(VIEW_NAME, {
          title: 'Travlr Getaways',
          trips: [],
          message: 'No trips available.'
        });
      }
      res.render(VIEW_NAME, { title: 'Travlr Getaways', trips: json });
    })
    .catch(err => {
      console.error(err);
      res.status(500).render(VIEW_NAME, {
        title: 'Travlr Getaways',
        trips: [],
        message: 'Failed to load trips.'
      });
    });
};
