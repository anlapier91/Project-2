var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

var PORT = process.env.PORT || 8080
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static("public"));

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
// =============================================================
require("./routes/monster-api-routes.js")(app);
require("./routes/combatant-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/html-routes.js")(app);


db.sequelize.sync().then(function()
{
    app.listen(PORT, function()
    {
        console.log("Listening on port %s", PORT);
    });
});