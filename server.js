// dependencies
var express = require("express");
var bodyparser = require("body-parser");
var path = require("path");

// set up the server
var app = express();
// so I can use Heroku as my server
var PORT = process.env.PORT || 8000;

// empyu array for participant
var users = [
      {},
];

// express app that handles data parsing
app.use(parser.urlencoded({extended: true}));
app.use(oarser.json());

// loop through the user input from the array
var control = true;
for(i = 0; i < users.length; i++) {

};

// message when serve boot up
app.listen(PORT, function() {
    console.log("The server is currently listening to " + PORT);
})