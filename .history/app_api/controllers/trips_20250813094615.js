const mongoose = require("mongoose");
const Trip = require("../models/travlr"); // Register model
const User = require("../models/users"); // Import the correct User model
const Model = mongoose.model("trips");

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
    try {
        const trips = await Model.find({});
        if (!trips || trips.length === 0) {
            return res.status(404).json({ message: "No trips found" });
        }
        res.status(200).json(trips);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error", details: err });
    }
};

// GET: /trips/:tripCode - lists a single trip
const tripsFindByCode = async (req, res) => {
    try {
        const trip = await Model.findOne({ code: req.params.tripCode });
        if (!trip) {
            return res.status(404).json({ message: "Trip not found" });
        }
        res.status(200).json(trip);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error", details: err });
    }
};

// Helper function: getUser
const getUser = async (req, res, callback) => {
    if (req.auth && req.auth.email) {
        try {
            const user = await User.findOne({ email: req.auth.email });
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            callback(req, res, user); // Pass the user to the callback for extensibility
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Server error", details: err });
        }
    } else {
        return res.status(401).json({ message: "Unauthorized access" });
    }
};

// POST: /trips - adds a new trip
const tripsAddTrip = (req, res) => {
    getUser(req, res, (req, res, user) => {
        const newTrip = new Trip({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description,
        });

        newTrip
            .save()
            .then((trip) => res.status(201).json(trip))
            .catch((err) => {
                console.error(err);
                res.status(400).json({ message: "Error adding trip", error: err });
            });
    });
};

// PUT: /trips/:tripCode - updates an existing trip
const tripsUpdateTrip = (req, res) => {
    getUser(req, res, (req, res, user) => {
        Model.findOneAndUpdate(
            { code: req.params.tripCode },
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description,
            },
            { new: true } // Return the updated document
        )
            .then((trip) => {
                if (!trip) {
                    return res.status(404).json({
                        message: "Trip not found with code " + req.params.tripCode,
                    });
                }
                res.status(200).json(trip);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({
                    message: "Error updating trip with code " + req.params.tripCode,
                    error: err,
                });
            });
    });
};

// Export the functions
module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip,
};