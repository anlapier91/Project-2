var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");

var PORT = process.env.PORT || 3000
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static("public"));


// Routes
// =============================================================
require("./routes/monster-api-routes.js")(app);
require("./routes/combatant-api-routes.js")(app);


db.sequelize.sync().then(function()
{
    app.listen(PORT, function()
    {
        console.log("Listening on port %s", PORT);
    });
});