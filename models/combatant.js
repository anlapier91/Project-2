module.exports = function(sequelize, DataTypes)
{
    var Combatant = sequelize.define("Combatant", 
    {
        //insert properties here
        //plan to create additional tables to handle multiple attacks and 
        //other abilities
        name: DataTypes.STRING,
        // size: DataTypes.STRING,
        // creatureType: DataTypes.STRING,
        // alignment: DataTypes.STRING,
        // armorClass: DataTypes.INTEGER,
        currentHP: DataTypes.INTEGER,
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
        // attackName: DataTypes.STRING,
        // attackBonus: DataTypes.INTEGER,
        // attackRange: DataTypes.INTEGER,
        // attackTargets: DataTypes.INTEGER,
        // damageDie: DataTypes.STRING,
        // damageModifier: DataTypes.INTEGER
    }, 
    {
		timestamps: false
    });
    
    Combatant.associate = function(models) 
    {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Combatant.belongsTo(models.Monster, 
        {
            foreignKey: 
            {
                allowNull: false
            }
        });
    };
    
    return Arena;
}