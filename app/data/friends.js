// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

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

module.exports = userArray;

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
"3",
"2",
"2",
"3"
]
}, {
    name: "Lou Ritter",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
    scores: [
        "4",
        "3",
        "4",
        "1",
        "5",
        "2",
        "5",
        "3",
        "1",
        "4"
    ]
}, {
    name: "Jordan Biason",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
    scores: [
        "4",
        "4",
        "2",
        "3",
        "2",
        "2",
        "3",
        "2",
        "4",
        "5"
    ]
}, {
    name: "Shivali",
    photo: "https://friend-finder-fsf.herokuapp.com/survey",
    scores: [
        "5",
        "2",
        "2",
        "2",
        "2",
        "2",
        "3",
        "2",
        "4",
        "2"
    ]
}, {
    name: "emily",
    photo: "https://friend-finder-fsf.herokuapp.com/survey",
    scores: [
        "2",
        "4",
        "2",
        "1",
        "1",
        "4",
        "3",
        "2",
        "4",
        "1"
    ]
}, {
    name: "emily",
    photo: "https://friend-finder-fsf.herokuapp.com/survey",
    scores: [
        "2",
        "4",
        "2",
        "1",
        "1",
        "4",
        "3",
        "2",
        "4",
        "1"
    ]
}, {
    name: "emily",
    photo: "https://friend-finder-fsf.herokuapp.com/survey",
    scores: [
        "2",
        "4",
        "2",
        "1",
        "1",
        "4",
        "3",
        "2",
        "4",
        "1"
    ]

}

];
for (var i = 0; i >= dataArray.length; i++) {
    console.log(dataArray[i++].scores);
}
console.log(dataArray[i].scores);
module.exports = dataArray;
// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
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
module.exports = userArray;

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

// Routes
// ===========================================================

// KEEP ME shows homepage text
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

// KEEP ME gets all friendssurvey which should display the survey page.
app.get("/survey.html", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// KEEP ME gets all friends
app.get("/api/friends", function(req, res) {
    return res.json(dataArray);
});

// KEEP ME gets all user data
app.get("/api/user", function(req, res) {
    return res.json(userArray);
});


// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});