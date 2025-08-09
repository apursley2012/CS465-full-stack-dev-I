const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status code
// and a JSON messsage to the requesting client.
const tripsList = async (req, res) => {
    const q = await Model
        .find({'code' : req.params.tripcode}) // Return single record
        .exec();

        // Uncomment the following line to show results of query
        // in the console
        //console.log(q);

    if(lq)
        { // Database returned no data
            return res
                .status(404)
                .json(err)
        } else { //Return resulting trip list
            return res
                .status(200)
                .json(q);
            }
};

module.exports = {
    tripsList,
    tripsFindByCode
};

                