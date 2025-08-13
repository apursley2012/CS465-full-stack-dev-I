const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

// GET /api/trips -> list all
const tripsList = async (req, res) => {
    try {
        const q = await Model
            .find({}) // no filter -> return all records
            .exec();

        if (!q || (Array.isArray(q) && q.length === 0)) { // Database returned no data
            return res
                .status(404)
                .json({ message: 'No trips found' });
        } else { // return resulting trip list
            return res
                .status(200)
                .json(q);
        }
    } catch (err) {
        return res.status(500).json({ message: 'Server error listing trips', error: String(err) });
    }
};

// GET /api/trips/:tripCode -> read one by code
const tripsFindByCode = async (req, res) => {
    try {
        const q = await Model
            .findOne({ code: req.params.tripCode }) // single doc by code
            .exec();

        if (!q) { // Database returned no data
            return res
                .status(404)
                .json({ message: 'Trip not found' });
        } else { // return resulting trip
            return res
                .status(200)
                .json(q);
        }
    } catch (err) {
        return res.status(500).json({ message: 'Server error finding trip', error: String(err) });
    }
};

// POST /api/trips -> create one
const tripsAddTrip = async (req, res) => {
    try {
        const q = await Model.create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        });

        if (!q) { // create returned nothing
            return res
                .status(400)
                .json({ message: 'Failed to create trip' });
        } else { // created
            return res
                .status(201)
                .json(q);
        }
    } catch (err) {
        if (err && err.code === 11000) {
            return res.status(409).json({ message: 'Trip code already exists', error: String(err) });
        }
        return res.status(400).json({ message: 'Validation error creating trip', error: String(err) });
    }
};

// PUT /api/trips/:tripCode -> update one by code
const tripsUpdateTrip = async (req, res) => {
    try {
        const q = await Model
            .findOneAndUpdate(
                { code: req.params.tripCode }, // selector
                {
                    code: req.body.code,
                    name: req.body.name,
                    length: req.body.length,
                    start: req.body.start,
                    resort: req.body.resort,
                    perPerson: req.body.perPerson,
                    image: req.body.image,
                    description: req.body.description
                },
                { new: true, runValidators: true, context: 'query' } // return updated doc, validate
            )
            .exec();

        if (!q) { // nothing matched
            return res
                .status(404)
                .json({ message: 'Trip not found' });
        } else { // updated doc
            return res
                .status(200)
                .json(q);
        }
    } catch (err) {
        if (err && err.code === 11000) {
            return res.status(409).json({ message: 'Trip code already exists', error: String(err) });
        }
        return res.status(400).json({ message: 'Error updating trip', error: String(err) });
    }
};

// DELETE /api/trips/:tripCode -> delete one by code
const tripsDeleteTrip = async (req, res) => {
    try {
        const q = await Model
            .deleteOne({ code: req.params.tripCode }) // delete by code
            .exec();

        if (!q || q.deletedCount === 0) { // nothing deleted
            return res
                .status(404)
                .json({ message: 'Trip not found' });
        } else { // success, no content
            return res
                .status(204)
                .send();
        }
    } catch (err) {
        return res.status(500).json({ message: 'Server error deleting trip', error: String(err) });
    }
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
};