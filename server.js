// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var boyToys = [{
    routeName = "myNameJeff",
    name = "Jeff",
    age = 39,
    height = "about 6 feet",
    hobbies = "talking about bitcoin, tinder, living outside his means, getting spa treatments"

}, {
    routeName = "supImDylan",
    name = "Dylan",
    age = 27,
    height = "6'2",
    hobbies = "skateboarding, snowboarding, EDM 4 Lyfe, handing out Red Bull on college campuses"
}, {
    routeName = "hiImGreg",
    name = "Greg",
    age = 34,
    height = "I'm a tall guy",
    hobbies = "mansplaining, drinking beer, calling everyone 'boss'"
}];

// Routes
// ===========================================================

// shows homepage text
app.get("/", function(req, res) {
    res.send("Welcome to the Free Dinner Finder!");
});

// gets all boy toys
app.get("/api/boyToys", function(req, res) {
    return res.json(boyToys);
});

// gets only the chosen boy toy
app.get("/api/boyToys/:boyToys", function(req, res) {
    // pushes data to front end for chosen character
    var theChosenOne = req.params.boyToys;
    console.log(theChosenOne);

    // iterates through boy toy array to find chosen boy toy
    for (var i = 0; i < boyToys.length; i++) {
        if (theChosenOne === boyToys[i].routeName) {
            return res.json(boyToys[i]);
        }
    }

    // tells user if the boy toy is not found
    return res.send("No boy toy found");
});

// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});