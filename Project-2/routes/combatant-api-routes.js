var db = require("../models");

module.exports = function(app)
{
    // console.log("in combatant-api-routes.js");
    app.get("/api/combatant", function(req, res)
    {
    //   console.log("in api combatants get");
      db.Combatant.findAll({}
        //   {include: db.Monster}
        ).then(function(dbCombatant)
      {
        //   console.log("combatant api/combatant json output");
        res.json(dbCombatant);
      });
    });

    app.get("/api/combatant/:id", function(req, res)
    {
    //   console.log("in api combatants get");
        db.Combatant.findAll(
        { 
            where: 
            {
                id :req.params.id
            },
            include: [db.Monster]
        }
        //   {include: db.Monster}
        ).then(function(dbCombatant)
      {
        //   console.log("combatant api/combatant json output");
        res.json(dbCombatant);
      });
    });

    app.post("/api/new", function(req, res)
    {  
        // console.log("in post /api/new");
      db.Combatant.create(req.body).then(function(dbCombatant) 
      {
        res.json(dbCombatant);
      });
    });
    
  app.put("/api/updateCombatant/", function(req, res)
    {
        // console.log("in put /api/updateCombatant");
        db.Combatant.update(
            req.body,
            {
                where: 
                {
                    id: req.body.id
                }
            }).then(function(dbCombatant)
        {
            res.json(dbCombatant);
        });
    });

    app.delete("/api/removeCombatant/:id", function(req, res)
    {
        // console.log("in delete /api/removeCombatant/:id");
        db.Combatant.destroy({
            where: 
            {
                id: req.params.id
            }
        }).then(function(dbCombatant)
        {
            res.json(dbCombatant);
        });
    });

    app.delete("/api/removeAllCombatants", function(req, res) {
        db.Combatant.destroy({
            where: {},
            truncate: true
        }).then(function(dbCombatant) {
            res.json(dbCombatant);
        });
    });
};