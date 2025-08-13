const fetch = require('node-fetch'); // Ensure this is correctly imported for API fetching

/* Define API Endpoint and Options */
const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
};

/* GET travel view */
const travel = async (req, res, next) => {
    try {
        // Fetch data from the API
        const response = await fetch(tripsEndpoint, options);
        const json = await response.json(); // Parse JSON response

        let message = null; // Default message is null
        let trips = [];

        // Check if the response is an array
        if (!Array.isArray(json)) {
            message = 'API lookup error'; // Error message if not an array
        } else {
            // If response is an array but empty
            if (!json.length) {
                message = 'No trips exist in our database';
            } else {
                trips = json; // Assign valid data to `trips`
            }
        }

        // Render the view with appropriate data and messaging
        res.render('travel', {
            title: 'Travlr Getaways',
            trips,
            message, // Pass the message for display if needed
        });
    } catch (error) {
        console.error('Error fetching trips:', error);
        res.status(500).send('Error fetching trips');
    }
};

module.exports = {
    travel,
};