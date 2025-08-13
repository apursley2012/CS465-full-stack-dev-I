const express = require("express");
const router = express.Router();
const { expressjwt: jwt } = require("express-jwt"); // Correct import
const tripsController = require("../controllers/trips");
const authController = require("../controllers/authentication");

const auth = jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"], // Required for express-jwt
    userProperty: "auth", // Attach decoded payload to req.auth
});

// Authentication Routes
router.route("/register").post(authController.register);
router.route("/login").post(authController.login);

// Trip Routes
router
    .route("/trips")
    .get(tripsController.tripsList)
    .post(auth, tripsController.tripsAddTrip);

router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode)
    .put(auth, tripsController.tripsUpdateTrip);

module.exports = router;