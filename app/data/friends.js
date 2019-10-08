// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var dataArray = [{
        name: "Ahmed",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
        scores: [
            "5",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
        ]
    },
    {
        name: "Jacob Deming",
        photo: "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
        scores: [
            "4",
            "2",
            "5",
            "1",
            "3",
            "2",
            "2",
            "1",
            "3",
            "2"
        ]
    },
    {
        name: "Jeremiah Scanlon",
        photo: "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
        scores: [
            "5",
            "2",
            "2",
            "2",
            "4",
            "1",
            "3",
            "2",
            "5",
            "5"
        ]
    },
    {
        name: "Louis T. Delia",
        photo: "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
        scores: [
            "3",
            "3",
            "4",
            "2",
            "2",
            "1",
            "3",
            "2",
            "2",
            "3"
        ]
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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

console.log(dataArray[0].scores);
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
console.log(userArray[0].scores);
module.exports = userArray;

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