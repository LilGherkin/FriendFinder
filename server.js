//Node modules needed for thing to function. 
const express = require("express");
const path = require("path");
//Set up a port that is determined by Heroku, or use port 8080 if not on Heroku. 
var PORT = process.env.PORT || 8080;
//Enables express per documentation
var app = express();
//Set up Express to handle data parsing.
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  