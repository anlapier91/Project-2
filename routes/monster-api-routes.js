var db = require("../models");

module.exports = function(app) 
{
    app.get("/api/monsters", function(req, res) 
    {
      // 1. Add a join to include all of each Author's Posts
      db.Monster.findAll({}).then(function(dbMonster) 
      {
        res.json(dbMonster);
      });
    });

    app.get("/api/monsters/:id", function(req, res) 
    {
      // 1. Add a join to include all of each Author's Posts
      db.Monster.findAll(
      {
        where: 
        {
          id: req.params.id
        }
      }).then(function(dbMonster) 
      {
        res.json(dbMonster);
      });
    });

    app.post("/api/newMonster", function(req, res)
    {  
        // console.log("in post /api/new");
      db.Monster.create(req.body).then(function(dbMonster) 
      {
        res.json(dbMonster);
      });
    });


};