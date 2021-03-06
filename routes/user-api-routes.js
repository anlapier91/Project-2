var db = require("../models");
var passport = require("../config/passport");

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

  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/chooseMonsters");
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
      // console.log('**********');
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      db.User.findOne({
        where: {
          id: req.user.id
        }
      }).then(function(data){
        res.json(data);
      });
    }
  });

  app.put("/api/updateWins/", function(req, res)
  {
    db.User.update(
    {
      wins: parseInt(req.body.wins)
    },
    {
      where: 
      {
        email : req.body.email
      }
    })
    .then(function (data) {
      console.log('data in updateWins: ',data);
      res.json(data)
    })
    .catch(function (err) {
      console.log('Error in updateWins: ', err);
    });
  });

  app.put("/api/updateLosses/", function(req, res) {
    db.User.update({
      losses: parseInt(req.body.losses)},
    {
      where: 
      {
        email : req.body.email
      }
    }).then(function (data) {
      console.log('data in updatelosses: ',data);
      res.json(data)
    })
    .catch(function (err) {
      console.log('Error in updatelosses: ', err);
    });
  });

  app.put("/api/updateTies/", function(req, res)
  {
    db.User.update(
    {
      ties: parseInt(req.body.ties)
    },
    {
      where: 
      {
        email : req.body.email
      }
    })    
    
  });
};