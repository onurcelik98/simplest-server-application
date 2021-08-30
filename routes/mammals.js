var express = require("express");
var router = express.Router();
//import{port} from "../app1";

// Defining route handlers
function getMammalsLandingHandler(req, res) {
    res.send("Landed on \"Mammals Home\" page on port " + port + '.\n\n');
}

function getMammalsAboutHandler(req, res) {
    res.send("You are now visiting the \"About Mammals\" page on port " + port + '.\n\n');
}

function getMammalsContactHandler(req, res) {
    res.send("You are now visiting the \"Contact Mammals\" page on port " + port + '.\n\n');
}

// Assigning handlers to routes
router.get('/', getMammalsLandingHandler)
router.get('/about', getMammalsAboutHandler);
router.get('/contact', getMammalsContactHandler);

module.exports = router;