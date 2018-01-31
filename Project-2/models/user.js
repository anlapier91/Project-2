module.exports = function(sequelize, DataTypes)
{
  var User = sequelize.define("User",
  {
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    wins: DataTypes.INTEGER,
    losses: DataTypes.INTEGER,
    ties: DataTypes.INTEGER 
  },
  {
    timestamp: false
  });
  return User;
}