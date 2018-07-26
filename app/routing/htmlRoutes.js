// dependencies

var path = require("path");

// routes
module.exports = function(app) {

    // routing to home.html
    app.get("/", function(request, response) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // routing to survey.html
    app.get("/add", function(request, response) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

};