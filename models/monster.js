module.exports = function(sequelize, DataTypes)
{
    var Monster = sequelize.define("Monster", 
    {
        //insert properties here
        //plan to create additional tables to handle multiple attacks and 
        //other abilities
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        size: DataTypes.STRING,
        creatureType: DataTypes.STRING,
        alignment: DataTypes.STRING,
        armorClass: DataTypes.INTEGER,
        defaultHP: DataTypes.INTEGER,
        hitDie: DataTypes.STRING,
        baseHD: DataTypes.INTEGER,
        baseHPBonus: DataTypes.INTEGER,
        speed: DataTypes.INTEGER,
        strength: DataTypes.INTEGER,
        dexterity: DataTypes.INTEGER,
        constitution: DataTypes.INTEGER,
        intelligence: DataTypes.INTEGER,
        wisdom: DataTypes.INTEGER,
        charisma: DataTypes.INTEGER,
        challengeRating: DataTypes.INTEGER, 
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
    
    Monster.associate = function(models) 
    {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Monster.hasMany(models.Combatant, 
        {
            foreignKey: 
            {
                allowNull: false
            }
        }, models.Attack);
    };
    return Monster;
}