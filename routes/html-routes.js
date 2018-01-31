var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function(app)
{
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/login.html"));
  // });

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    // console.log("/ of html routes" + req.user);
    if (req.user) {
      console.log(" in / about to login");
      res.redirect("/chooseMonsters");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
  
  app.get("/chooseMonsters", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"));
    // console.log("/ of html routes" + req.user);

  });


  app.get("/battle", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/battle page.html"));
  });



  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    console.log("in /login");
    if (req.user) {
      console.log("user is " + req.user);
      res.redirect("/chooseMonsters");
    }
    console.log("return to login?");
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });


}