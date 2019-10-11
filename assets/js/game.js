$(document).ready(function() { 



//Declare global objects 

// let attack;
// let defense;
// let power;
// let attackCharater;
// let attackerHealth;
// let defenseCharactor;
// let defenderHealth;
// let name;
// let yourCharacter;
// let badCharacter;
// let myPlayer = "";
// let myDef = "";





var character = {
    "ObiWan": {
        name: "Obiwan",
        health: 120,
        attack: 8,
        imageUrl: "assets/img/obi-wan.jpg",
        enemyAttackBack: 24

    },

    "Rey": {
        name: "Rey",
        health: 100,
        attack: 10,
        imageUrl: "assets/img/Daisy-Ridley.jpg",
        enemyAttackBack: 5
    },

    "darthVadar": {
        name: "Darth Vadar",
        health: 150,
        attack: 10,
        imageUrl: "assets/img/darth-vader.jpg",
        enemyAttackBack: 25
    },

    "kyloRyen": {
        name: "Kylo Ryen",
        health: 180,
        attack: 12,
        imageUrl: "assets/img/kylo-ren.jpeg",
        enemyAttackBack: 25
    }
};

let attacker;
let combatants = [];
let defender;
let turnCounter = 1;
let killCount = 0;

let renderCharacter = function(character, renderArea) {
    let charDiv = $("<div class'character' data-name=' " + character.name + "'>");
    let charName = $("<div class='character-name'>").text(character.name);
                                                                                // need to take out hardcode and put image into JS file
    let charImage = $("<img alt-'image' class='character-image'>").attr("src", character.imageURL);
    let charHealth = $("<div class='character-health'>").text(character.health);
    charDiv.append(charName).append(charImage).append(charHealth);
    $(renderArea).append(charDiv);
};

let initializeGame = function () {
    for (let key in character) {
        renderCharacter(character[key], "#characters-section");
    }
};

initializeGame();

let updateCharacter = function (charObj, areaRender) {
    $(areaRender).empty();
    renderCharacter(charObj, areaRender);
};

let renderEnemies = function (enemyArr) {
    for (let i = 0; i < enemyArr.length; i++) {
        renderCharacter(enemyArr[i], "#avaliable-to-attack-section");
    }
};

let renderMessage = function(message) {
    let gameMessageSet = $("#game-message");
    let newMessage = $("div").text(message);
    gameMessageSet.append(newMessage);
}

let restartGame = function (resultMessage) {
    let restart = $("<button>Restart</button>").click(function() {
        location.reload();
    });

    let gameState = $("<div>").text(resultMessage);

    $("body").append(gameState);
    $("body").append(restart);
};

let clearMessage = function () {
    let gameMessage = $("#game-message");

    gameMessage.text("");
};

$("characters-section").on("click", ".character", function () {
    let name = $(this).attr("data-name");

    if(!attacker){
        attacker = character[name];

        for (let key in character){
            if (key !== name) {
                combatants.push(character[key]);
            }
        }

        $("#characters-section").hide();

        updateCharacter(attacker, "#selected-character");
        renderEnemies(combatants);
    }
});


$("#available-to-attack-section").on("click", ".character", function(){

    let name = $(this).attr("data-name");

    if($("#defender").children().length === 0){
        defender = character[name];
        updateCharacter(defender, "#defender");

        $(this).remove();
        clearMessage();
    }
});

$("#attack-button").on("click", function() {
    if($("#defender").children().length !== 0) {
        let attackMessage = "You Attacked " + defender.name  + " for " + attacker.attack * turnCounter + " damage.";
        let counterAttackMessage = defender.name + " attacked you back for " + defender.enemyAttackBack + " damage.";
        clearMessage();

        defender.health -+ attacker.attack * turnCounter;

        if (defender.health > 0) {
            updateCharacter(defender, "#defender");

            renderMessage(attackMessage);
            renderMessage(counterAttackMessage);

            attacker.health -= defender.enemyAttackBack;

            updateCharacter(attacker, "#selected-character");

            if (attacker.health <= 0) {
                clearMessage();
                restartGame("LOSER, you have lost!");
                $("#attack-button").off("click");
            }
        } else {
            $("#defender").empty();

            let gameStateMessage = "You have defeated " + defender.name + ", please choose another enemy.";
            renderMessage(gameStateMessage);

            killCount++;

            if (killCount >= combatants.length) {
                clearMessage();
                $("#attack-button").off("click");
                restartGame("Congrats, you have WON!");
            }
        }

        turnCounter++;
    } else {
        clearMessage();
        renderMessage ("No more enemies to fight here.");
    }
});







// $("restartBtn").on("click", function () {
//     // Restart the program whenever the user clicks the mouse
//     document.restart();




});



// $(document).ready(function () {
//     reset();

// });
// choose (by cicking) character
// $(".players").click(function () {

//     for (let i = 0; i < 4; i++)

//     if (myPlayer == "") {
//         $(this).appendTo("#myCharacter");
//         console.log(this.data-name);
//         myPlayer = $(this);
//         yourCharacter = $(myPlayer).attr("value");
//     }
//     else {
//         $(".players").not(myPlayer).appendTo("#enemy", [i]);
//     }

//     if (yourCharacter == character.ObiWan.name) {
//         attackerHealth = character.ObiWan.hp;
//         aPower = character.ObiWan.aPower;
//         attack = characters.ObiWan;
//     }

//     else if (yourCharacter == character.Rey.name) {
//         attackerHealth = character.Rey.hp;
//         aPower = character.Rey.aPower;
//         attack = characters.Rey;
//     }
//     else if (yourCharacter == character.darthVadar.name) {
//         attackerHealth = character.darthVadar.hp;
//         aPower = character.darthVadar.aPower;
//         attack = characters.darthVadar;
//     }
//     else if (yourCharacter == character.kyloRyen.name) {
//         attackerHealth = character.kyloRyen.hp;
//         aPower = character.dkyloRyen.aPower;
//         attack = characters.kyloRyen;
//     }
   



// });

// $("#enemy").click(function(){
//     if (myDef == "") {
//         $(this).appendTo("#bad");
//         myDef = $(this);
//         console.log(this);
//         badCharacter = $(myDef).attr("value");


//     }
    

// });

// });