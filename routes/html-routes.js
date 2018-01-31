var path = require("path");

module.exports = function(app)
{
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../index.html"));
  // });

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/chooseMonsters");
    }
    res.sendFile(path.join(__dirname, "../signup.html"));
  });
  
  app.get("/chooseMonsters", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../character page.html"));
  });


  app.get("/battle", function(req, res) {
    res.sendFile(path.join(__dirname, "../battle page.html"));
  });



  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/chooseMonsters");
    }
    res.sendFile(path.join(__dirname, "../login.html"));
  });


}