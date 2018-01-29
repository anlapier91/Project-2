// var character1 = ;
// var character2 =;
// var currentHP = ;
// var strength = ;
// var dexterity = ;

// var character = $(".character").on("click",function (e) {
    
// })

// on click return confirm
function choosePlayer(){
    $(".character").on("click", function(event) {
        event.preventDefault();
      
        // pull character info from database
        var character1 = {
          name: $(".name").val().trim(),
          currentHP: $(".currentHP").val().trim(),
          strength: $(".strength").val().trim(),
          defense: $(".dexterity").val().trim()
        };
};

function chooseComputer(){
    $(".character").on("click", function(event) {
        event.preventDefault();
      
        // pull character info from database
        var character2 = {
          name: $(".name").val().trim(),
          currentHP: $(".currentHP").val().trim(),
          strength: $(".strength").val().trim(),
          defense: $(".dexterity").val().trim()
        };
};

function playerConfirm(){
    $(".confirm").on("click", function(event) {
        event.preventDefault();
      
};
// on click return confirm
// if () { confirmation is true, send information to combat table}
    
function computerConfirm();
console.log("You will face" + object.name + "in combat!");
// on click return confirm
// if () { confirmation is true, send information to combat table}
function cancel();
// on click, remove information from info displays}

function characterSelect(character1, character2){
         playerConfirm();
         computerConfirm();
}
         
    // if (attackRoll()){
    //     damageRoll();
    //     gameOver();
    // }

module.export = characterSelect;