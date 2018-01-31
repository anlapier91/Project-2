// var character1 = ;
// var character2 =;
// var currentHP = ;
// var strength = ;
// var dexterity = ;
// var strMod = ;
// var dexMod = ;

// ('.radioButtons').on('click','button',function(){
//     var key;
//     key=$(this).val()    
//     }
//     )

function proficiency(){
    var prof = (Math.floor((challengeRating - 1)/4) + 2);
    return prof
}

function castingStat(){
    var strMod = (Math.floor((strength-10)/2));
    var dexMod = (Math.floor((dexterity-10)/2));
    var conMod = (Math.floor((constitution-10)/2));
    var intMod = (Math.floor((intelligence-10)/2));
    var wisMod = (Math.floor((wisdom-10)/2));
    var chaMod = (Math.floor((charisma-10)/2));
    var result = [strMod, dexMod, conMod, intMod, wisMod, chaMod]
    return result
}

function spellSave(char1, char2){
   var Save = 8 + proficiency() + castingStat().wisMod;
   return Save
}

function savingThrow(char1, char2){
   var result =  (Math.floor(Math.random() * 20) + 1) + castingStat().dexMod;
    console.log(result);
    if (result >= char1.spellSave()){
        return true;
    } else {
        return false;
    }
}

function spellDamage(char1, char2){
    var result = 0;
    for (i = 0; i < 6; i++) {
        result +=  ((Math.floor(Math.random() * 8) + 1);   
    }
    console.log(result);
    char1.currentHP-=(result);
}

    if (initiativeResult()){
        if (savingThrow = true){
            (spellDamage(character1, character2)/2);
        }
        if (savingThrow = false){
            spellDamage(character1, character2);
        }
    
            gameOver();
    }
    else {
        var attack = attackRoll(character2, character1)
        if (attack[0]){
            damageRoll(character2, character1);
        if (attack[1]===20){
            damageRoll(character2, character1);
            var strMod = (Math.floor((strength-10)/2));
            currentHP.character2 += strMod.character1;
        }
        }

       var attack = attackRoll(character1, character2)
        if (!gameOver() && attack[0]{
                damageRoll(character1, character2);
            if (attack[1]===20){
                damageRoll(character1, character2);
                var strMod = (Math.floor((strength-10)/2));
                currentHP.character1 += strMod.character2;
            }
            }
        gameOver();
    }
}

module.export = combatTurn;