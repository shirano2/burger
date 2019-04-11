/* express */
var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();

/* static content in "public" directory */
app.use(express.static("public"));

/* parse request body as JSON */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* handlebars */
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

/* route */
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

/* listener */
app.listen(PORT, function() {
  console.log("Micheal, Can you hear me? I'm in",PORT,"port, please come here.... (Mute)");
});