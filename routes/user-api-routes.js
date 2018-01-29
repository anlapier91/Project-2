var db = require("../models");

module.exports = function(app) 
{
    app.get("/api/users", function(req, res) 
    {
      // 1. Add a join to include all of each Author's Posts
      db.User.findAll({}).then(function(dbUser) 
      {
        res.json(dbUser);
      });
    });

    app.get("/api/users/:userName", function(req, res) 
    {
      // 1. Add a join to include all of each Author's Posts
      db.User.findAll(
      {
        where: 
        {
          id: req.params.userName
        }
      }).then(function(dbUser) 
      {
        res.json(dbUser);
      });
    });


};