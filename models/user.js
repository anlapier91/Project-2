module.exports = function(sequelize, DataTypes)
{
  var User = sequelize.define("User",
  {
    email: 
    {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: 
      {
        isEmail: true
      }
    },
    password: 
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    wins: DataTypes.INTEGER,
    losses: DataTypes.INTEGER,
    ties: DataTypes.INTEGER 
  },
  {
    timestamp: false
  });
  return User;
}