// var character1 = ;
// var character2 =;
// var currentHP = ;
// var strength = ;
// var dexterity = ;
// var strMod = ;
// var dexMod = ;


function initiative(){
    var result = Math.floor(Math.random() * 20) + 1;
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

function attackRoll(char1, char2){
   var result =  Math.floor(Math.random() * 20) + 1;
    console.log(result);
    if (char2.attackRoll >= char1.dexterity){
        return true;
    } else{
        return false;
    }
}

function damageRoll(char1, char2){
   var result =  Math.floor(Math.random() * 20) + 1;
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
        if (attackRoll(character1, character2)){
            damageRoll(character1, character2);
        }
        if (!gameOver() && attackRoll(character2, character1)){
            damageRoll(character2, character1);
            gameOver();
        }
    }
    else {
        if (attackRoll(character2, character1)){
            damageRoll(character2, character1);
        }
        if (!gameOver() && attackRoll(character1, character2)){
            damageRoll(character1, character2);
            gameOver();
        }
    }
   
}

module.export = combatTurn;