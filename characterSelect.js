$(document).ready(function() {
    attackButton.onclick(function(){
    combatTurn(character1, character2);
    combatTurn(character2, character1);
    });
}

