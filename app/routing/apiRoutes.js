// dependencies
var participants = require("../data/friend.js");

module.exports = function(app) {
    app.get("/api/:participants?", function(request, response) {
        if (request.params.participants) {
            participants.findOne( {
                where: {
                    routeName: request.params.participants
                }
            }).then(function(result) {
                return res.json(result);
            });
        }
        else {
            participants.findAll({}).then(function(result) {
                return res.json(result);
            });
        }
    });

};