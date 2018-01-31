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

function initiative(){
    var dexMod = (Math.floor((dexterity-10)/2));
    var result = (Math.floor(Math.random() * 20) + 1) + dexMod;
    console.log(result);
}

function initiativeResult(){
    if (character1.initiative < character2.initiative) {
       return false;
    }
    else {
        return true;
    }
}

function proficiency(){
    var prof = (Math.floor((challengeRating - 1)/4) + 2);
    return prof
}

function attackRoll(char1, char2){
   var prof = proficiency();
   var strMod = (Math.floor((strength-10)/2));
   var result =  (Math.floor(Math.random() * 20) + 1) + prof + strMod;
    console.log(result);
    if (char2.attackRoll >= char1.dexterity){
        return [true, result];
    } else {
        return false;
    }
}

function damageRoll(char1, char2){
   var strMod = (Math.floor((strength-10)/2));
   var result =  (Math.floor(Math.random() * 20) + 1) + strMod;
    console.log(result);
    char1.currentHP-=(result);
}

function gameOver(){
    if (character1.currentHP <= 0){
        console.log("You have been defeated! Would you like to play again?");
        return true;
    }
    if (character2.currentHP <= 0){
        console.log("You have emerged victorious! Would you like to play again?");
        return true;
    }
}

function combatTurn(character1, character2){

    function gameOver(){
        if (character1.currentHP <= 0){
            console.log("You have been defeated! Would you like to play again?");
            return true;
        }
        if (character2.currentHP <= 0){
            console.log("You have emerged victorious! Would you like to play again?");
            return true;
        }
    }

    if (initiativeResult()){
        var attack = attackRoll(character1, character2)
        if (attack[0]){
            damageRoll(character1, character2);
        if (attack[1]===20){
            damageRoll(character1, character2);
            var strMod = (Math.floor((strength-10)/2));
            currentHP.character2 += strMod.character1;
        }

        var attack = attackRoll(character2, character1)
        if (!gameOver() && attack[0]){
                damageRoll(character2, character1);
            if (attack[1]===20){
                damageRoll(character2, character1);
                var strMod = (Math.floor((strength-10)/2));
                currentHP.character1 += strMod.character2;
            }
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