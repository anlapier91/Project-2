// var combat = require("javascript/combatScripts.js");

$(document).ready(function() {
	var myChar, opponentChar, choices, enemyArray, haveCharacter, haveAttacker, numEnemies, rounds;	//Set Global Variables
	var wins = 0;
	var loses = 0;

	function varSet() {		//Sets all of the variable values
		myChar;
		opponentChar;

		choices = [];
		enemyArray = [ {
			id: 0,
			name: "Character 1",
			pic: 'http://via.placeholder.com/100x175',
			hitPoints: 150,
			attackPower: 5
		}, {
			id: 1,
			name: "Character 2",
			pic: 'http://via.placeholder.com/100x175',
			hitPoints: 100,
			attackPower: 25 		
		}, {
			id: 2,
			name: "Character 3",
			pic: 'http://via.placeholder.com/100x175',
			hitPoints: 120,
			attackPower: 19 
		}, {
			id: 3,
			name: "Character 4",
			pic: 'http://via.placeholder.com/100x175',
			hitPoints: 140,
			attackPower: 9 
		} ];

		haveCharacter = false;
		haveAttacker = false;
		numEnemies = 3;
		rounds = 7;

		for(var i = 0; i < enemyArray.length; i++) {
			choices += "<div id=" + enemyArray[i].id + " class='btn character text-center' value=" + enemyArray[i].id +
			"><img class='houses' src=" + enemyArray[i].pic + " alt=" + enemyArray[i].name + "><br> HP: " + enemyArray[i].hitPoints +
			"<br> AP: " + enemyArray[i].attackPower + " </div>";
		}

		$("#picking").html(choices);
		$("#todo").html("Chose Your Character!");

		$('.hero').remove();
		$('.fighting').remove();
		$('#whathappens').html("");

		attachCharacterOnClick();
	}

	
	//Display Stats
	function printCharacters() {
		var hero = "<div id=" + enemyArray[myChar].id + " class='btn character text-center hero' value=" + enemyArray[myChar].id +
			"><img class='houses' src=" + enemyArray[myChar].pic + " alt=" + enemyArray[myChar].name + "><br> HP: " + enemyArray[myChar].hitPoints +
			"<br> AP: " + enemyArray[myChar].attackPower + " </div>";

		var badguy = "<div id=" + enemyArray[opponentChar].id + " class='btn character text-center fighting' value=" + enemyArray[opponentChar].id +
			"><img class='houses' src=" + enemyArray[opponentChar].pic + " alt=" + enemyArray[opponentChar].name + "><br> HP: " + enemyArray[opponentChar].hitPoints +
			"<br> AP: " + enemyArray[opponentChar].attackPower + " </div>";

		$('#myguy').html(hero);
		$('#enemy').html(badguy);
	}

	function whatHappens() {
		var description = "You attack " + enemyArray[opponentChar].name + " for " + enemyArray[myChar].attackPower + " damage!<br>" +
			enemyArray[opponentChar].name + " counter attacks for " + enemyArray[opponentChar].attackPower + " damage!<br>" +
			"Your attack power has increased by " + rounds + "!";
		$('#whathappens').html(description);
	}


	//Pick Your Character
	function attachCharacterOnClick() {
		$('.character').on("click", function(){
			if(!haveCharacter) {	
				myChar = $(this).attr('id');
				$("#myguy").append(this);
				$(this).addClass("hero");

				haveCharacter = true;
				$('#whathappens').html("");
				$("#todo").html("Choose your opponent!");

				var id = $(this).attr('id');

				$.get("api/monsters/" + id, function (data) 
				{
					console.log(data);
						var character1 = {
								currentHP: data[0].defaultHP,
								initiative: data[0].dexterity,
								userControlled: true,
								MonsterId: id
						}
						
						$.post("api/new", character1, function()
						{
							console.log(character1);
								//reload page(with 1st character)
						});
				});
			}
			//Pick Openent
			else if(!haveAttacker && haveCharacter && myChar !== $(this).attr('id')) {	
				opponentChar = $(this).attr('id');
				$("#enemy").append(this);
				$(this).addClass("fighting");

				haveAttacker = true;
				$('#whathappens').html("");
				$("#todo").html("Keep clicking attack to duel!");

				var id = $(this).attr('id');
				$.get("api/monsters/" + id, function (data) 
				{
					console.log(data);
						var character1 = {
								currentHP: data[0].defaultHP,
								initiative: data[0].dexterity,
								userControlled: false,
								MonsterId: id
						}
						
						$.post("api/new", character1, function()
						{
							console.log(character1);
								//reload page(with 1st character)
						});
				});
			}
		});
	}



	$('#restart').on("click", function(){
		varSet();
	});

	$("#attack").on("click", function()
	{

	});

	attachCharacterOnClick();
	varSet();

});