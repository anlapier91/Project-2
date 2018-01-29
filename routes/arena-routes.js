var db = require("../models");

module.exports = function(app)
{
  app.get("api/combatant", function(req, res)
  {
    db.Combatant.findAll({include: db.Monster}).then(function(dbCombatant)
    {
      res.json(dbMonster);
    });
  });

  app.post("api/combatant", function(req, res)
  {
    // db.Combatant.create()
  });

};