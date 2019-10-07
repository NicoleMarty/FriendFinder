// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// ---------------------------------------------------------------------------------------------------
var userArray = [{
    "name": "Nicole",
    "photo": "",
    "scores": [
        "1",
        "2",
        "3",
        "4",
        "4",
        "4",
        "4",
        "4",
        "4",
        "4"
    ]
}];

module.exports = userArray;

// compare the difference between current user's scores against those from other users, question by question.
// ---------------------------------------------------------------------------------------------------

// Add up the differences to calculate the totalDifference.
// Remember to use the absolute value of the differences.
// Your app should calculate both 5-3 and 3-5 as 2
// The closest match will be the user with the least amount of difference.


// Once you've found the current user's most compatible friend, display the result as a modal pop-up.
// The modal should display both the name and picture of the closest match.
// KEEP ME shows homepage text
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

// KEEP ME gets all friendssurvey which should display the survey page.
app.get("/survey.html", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// KEEP ME gets all friends
app.get("/api/user", function(req, res, userQuery) {
    return res.json(userArray);

    function userQuery() {
        $.ajax({
                url: "/api/user",
                method: "GET"
            })
            .then(function(userArray) {

                // Here we then log the tableData to console, where it will show up as an object.
                console.log(userArray);
                console.log("------------------------------------");

            });
    }
});





// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});