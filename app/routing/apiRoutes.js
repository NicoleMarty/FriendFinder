var dataArray = require("../data/friends");
var userArray = require("../data/user");

module.exports = function(app) {
    // KEEP ME - A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    // gets all friends
    app.get("/api/friends", function(req, res) {
        return res.json(dataArray);
    });

    // A POST routes /api/friends. This will be used to handle incoming survey results. 
    // This route will also be used to handle the compatibility logic.
    document.getElementsByID("#submit").on("click", function() {
        app.post("/api/user", function(req, res) {
            res.push(userArray);
        })
        console.log(userArray);
    })
};