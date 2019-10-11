// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// ---------------------------------------------------------------------------------------------------


// compare the difference between current user's scores against those from other users, question by question.
// ---------------------------------------------------------------------------------------------------
var userArray = [{
    name: "",
    photo: "",
    scores: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ]
}];


$("#submit").on("click", function(event) {
    event.preventDefault();

    // Here we grab the form elements
    var userArray = [{
        name: $("#name").val().trim(),
        image: $("#image").val().trim(),
        scores: [$("#answer1").val().trim(), $("#answer2").val().trim(), $("#answer3").val().trim(), $("#answer4").val().trim(), $("#answer5").val().trim(),
            $("#answer6").val().trim(), $("#answer7").val().trim(), $("#answer8").val().trim(), $("#answer9").val().trim(), $("#answer10").val().trim()
        ]
    }];

    console.log(userArray);

});

// KEEP ME gets all user data
app.get("/api/user", function(req, res) {
    return res.json(userArray);
});

// Add up the differences to calculate the totalDifference.
// Remember to use the absolute value of the differences.
// Your app should calculate both 5-3 and 3-5 as 2
// The closest match will be the user with the least amount of difference.


// Once you've found the current user's most compatible friend, display the result as a modal pop-up.
// The modal should display both the name and picture of the closest match.


// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});