module.exports = function(sequelize, DataTypes)
{
    var Attack = sequelize.define("Attack", 
    {
        //insert properties here
        //plan to create additional tables to handle multiple attacks and 
        //other abilities
        // name: DataTypes.STRING,
        // size: DataTypes.STRING,
        // creatureType: DataTypes.STRING,
        // alignment: DataTypes.STRING,
        // armorClass: DataTypes.INTEGER,
        // currentHP: DataTypes.INTEGER,
        // initiative: DataTypes.INTEGER,
        // userControlled: DataTypes.BOOLEAN
        // defaultHP: DataTypes.INTEGER,
        // hitDie: DataTypes.STRING,
        // baseHD: DataTypes.INTEGER,
        // baseHPBonus: DataTypes.INTEGER,
        // speed: DataTypes.INTEGER,
        // strength: DataTypes.INTEGER,
        // dexterity: DataTypes.INTEGER,
        // constitution: DataTypes.INTEGER,
        // intelligence: DataTypes.INTEGER,
        // wisdom: DataTypes.INTEGER,
        // charisma: DataTypes.INTEGER,
        attackName: DataTypes.STRING,
        attackBonus: DataTypes.INTEGER,
        attackRange: DataTypes.INTEGER,
        attackTargets: DataTypes.INTEGER,
        damageDie: DataTypes.STRING,
        damageModifier: DataTypes.INTEGER
    }, 
    {
		timestamps: false
    });

    Attack.associate = function(models) 
    {
        Attack.belongsTo(models.Monster, 
        {
            foreignKey: 
            {
                allowNull: false
            }
        });
    };
    
    return Attack;
}