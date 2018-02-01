var characterScripts = require("characterScripts.js");

$(document).ready(function() {
    $(".character").onclick(function(event) {
        console.log("character clicked");
        event.preventDefault();
        characterScripts.choosePlayer();
    });
});
