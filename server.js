var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;

var app = express();

//TODO: make Public folder
// app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json());

//TODO: make handlebars folder with index and main pages
// app.engine("handlebars", exphbs({ defaultLayout: "main"}));
// app.set("view engine", "handlebars");

//TODO: make Controllers folder
// var routes = require("./controllers/burger_controller.js");

// app.use(routes);

app.listen(PORT, function(){
    console.log("server listening on: http://localhost: " + PORT );
});