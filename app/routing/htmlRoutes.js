// dependencies

var path = require("path");

module.exports = function(app) {
    app.get("/", function(request, response) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/add", function(request, response) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

};