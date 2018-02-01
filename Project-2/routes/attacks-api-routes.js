var db = require("../models");

module.exports = function(app)
{
	app.get("/api/attacks", function(req, res) {
		db.Attack.findAll({
			
		}).then(function(dbAttack) {
			res.json(dbAttack);
		});
	});

	app.get("/api/attacks/:id", function(req, res) {
		db.Attack.findAll({
			where: {
				id: req.params.id
			},
			include: [db.Monster]
		}).then(function(dbAttack) {
			res.json(dbAttack);
		})
	});

	app.post("/api/newAttack", function(req, res)
    {  
        // console.log("in post /api/new");
      db.Attack.create(req.body).then(function(dbAttack) 
      {
        res.json(dbAttack);
      });
    });






};