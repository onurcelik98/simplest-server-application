var express = require("express");
var router = express.Router();
//import{port} from "../app1";

// Defining route handlers
function getBirdsLandingHandler(req, res) {
    res.send("Landed on \"Birds Home\" page on port " + port + '.\n\n');
}

function getBirdsAboutHandler(req, res) {
    res.send("You are now visiting the \"About Birds\" page on port " + port + '.\n\n');
}

function getBirdsContactHandler(req, res) {
    res.send("You are now visiting the \"Contact Birds\" page on port " + port + '.\n\n');
}

// Assigning handlers to routes
router.get('/', getBirdsLandingHandler)
router.get('/about', getBirdsAboutHandler);
router.get('/contact', getBirdsContactHandler);

module.exports = router;