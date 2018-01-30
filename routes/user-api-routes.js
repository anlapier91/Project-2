var db = require("../models");

module.exports = function(app) 
{
  app.get("/api/users/:userName", function(req, res) 
  {
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

  app.post("/api/new", function(req, res)
  {
    db.User.create(req.body).then(function(dbUser)
    { 
      res.json(dbUser);
    });
  });


};