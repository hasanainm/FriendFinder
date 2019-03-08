var express = require("express");
var path = require("path");

var app = express();

var port = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));

app.use(express.json());

require("./app/routing/apiRoutes")(app);

require("./app/routing/htmlRoutes")(app);

app.listen(port, function(){
  console.log("App is listening on PORT: " + port);
})