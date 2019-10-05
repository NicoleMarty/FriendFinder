// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;



// Routes
// ===========================================================

// shows homepage text
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
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