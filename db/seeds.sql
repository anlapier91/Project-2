
-- Inserts monsters into table-- 
INSERT INTO monsters (name, image, size, creatureType, alignment, armorClass, defaultHP, hitDie, baseHD, baseHPBonus, speed, strength, dexterity,
	constitution, intelligence, wisdom, charisma, challengeRating, attackName, attackBonus, attackRange, attackTargets, damageDie, damageModifier)
VALUES ("Animated Armor", "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/429/1000/1000/636306156895834255.jpeg", "Medium", "construct", "unaligned", 18, 33, "d8", 6, 6, 25, 14, 11, 13, 1, 3, 1, 1, "Slam", 4, 5, 1, "1d6", 2);

INSERT INTO monsters (name, image, size, creatureType, alignment, armorClass, defaultHP, hitDie, baseHD, baseHPBonus, speed, strength, dexterity,
	constitution, intelligence, wisdom, charisma, challengeRating, attackName, attackBonus, attackRange, attackTargets, damageDie, damageModifier)
VALUES ("Brass Dragon Wyrmling", "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/215/1000/1000/636252764963208954.jpeg", "Medium", "dragon", "chaotic good", 16, 16, "d8", 3, 3, 30, 15, 10, 13, 10, 11, 13, 1, "Bite", 4, 5, 1, "1d10", 2);

INSERT INTO monsters (name, image, size, creatureType, alignment, armorClass, defaultHP, hitDie, baseHD, baseHPBonus, speed, strength, dexterity,
	constitution, intelligence, wisdom, charisma, challengeRating, attackName, attackBonus, attackRange, attackTargets, damageDie, damageModifier)
VALUES ("Brown Bear", "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg", "Large", "beast", "unaligned", 11, 34, "d10", 4, 12, 40, 19, 10, 16, 4, 13, 7, 1, "Claws", 5, 5, 1, "2d6", 4);

INSERT INTO monsters (name, image, size, creatureType, alignment, armorClass, defaultHP, hitDie, baseHD, baseHPBonus, speed, strength, dexterity,
	constitution, intelligence, wisdom, charisma, challengeRating, attackName, attackBonus, attackRange, attackTargets, damageDie, damageModifier)
VALUES ("Bugbear", "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/221/315/315/636252765234633232.jpeg", "Medium", "humanoid", "chaotic evil", 16, 27, "d8", 5, 5, 30, 15, 14, 13, 8, 11, 9, 1, "Morningstar", 4, 5, 1, "2d8", 2);

INSERT INTO monsters (name, image, size, creatureType, alignment, armorClass, defaultHP, hitDie, baseHD, baseHPBonus, speed, strength, dexterity,
	constitution, intelligence, wisdom, charisma, challengeRating, attackName, attackBonus, attackRange, attackTargets, damageDie, damageModifier)
VALUES ("Centaur", "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/227/1000/1000/636252765573266420.jpeg", "Large", "monstrosity", "neutral good", 12, 45, "d10", 6, 12, 50, 18, 14, 14, 9, 13, 11, 2, "Pike", 6, 10, 1, "1d10", 4);

-- inserts into combatants table
INSERT INTO combatants (currentHP, initiative, MonsterId, userControlled)
VALUES (45, 18, 4, true);