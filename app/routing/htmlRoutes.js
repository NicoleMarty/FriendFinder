// KEEP ME - A GET Route to /survey which should display the survey page.
app.get("/survey.html", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// A default, catch-all route that leads to home.html which displays the home page.

// KEEP ME shows homepage text
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});