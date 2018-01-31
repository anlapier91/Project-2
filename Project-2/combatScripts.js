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
    if (result.character1 < result.character2) {
       attackRoll()


    } else if{ 
        
    } else{
        // compare dex mod
    }

}

function attackRoll(){
   var result =  Math.floor(Math.random() * 20) + 1;
    console.log(result);
    if (attackRoll.character2 >= dexterity.character1){
        return true;
    } else{
        return false;
    }
}

function damageRoll(){
   var result =  Math.floor(Math.random() * 20) + 1;
    console.log(result);
    currentHP.character1-=(result);
}

function gameOver(){
    if (currentHP.character1 <= 0){
        console.log("You have been defeated! Would you like to play again?");
    }
    if (currentHP.character2 <= 0){
        console.log("You have emerged victorious! Would you like to play again?");
    }
}

function combatTurn(character1, character2){
    if (attackRoll()){
        damageRoll();
        gameOver();
    }
}

module.export = combatTurn;