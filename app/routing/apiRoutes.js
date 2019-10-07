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
    app.post("/api/user", function(req, res) {
        res.json(userArray);
    });

    app.post("/api/survey", function(req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        } else {
            waitListData.push(req.body);
            res.json(false);
        }
    });

}