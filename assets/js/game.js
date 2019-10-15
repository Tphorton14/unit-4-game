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





let characters = {
    "ObiWan": {
        name: "Obiwan",
        health: 120,
        attack: 8,
        imageUrl: "../image/obi-wan.jpg",
        enemyAttackBack: 24

    },

    "Rey": {
        name: "Rey",
        health: 100,
        attack: 10,
        imageUrl: "../image/Daisy-Ridley.jpg",
        enemyAttackBack: 5
    },

    "darthVadar": {
        name: "Darth Vadar",
        health: 150,
        attack: 10,
        imageUrl: "../image/darth-vader.jpg",
        enemyAttackBack: 25
    },

    "kyloRyen": {
        name: "Kylo Ryen",
        health: 180,
        attack: 12,
        imageUrl: "../image/kylo-ren.jpeg",
        enemyAttackBack: 25
    }
};

let attacker;
let combatants = [];
let defender;
let turnCounter = 1;
let killCount = 0;

let renderCharacter = function(characters, renderArea) {
    let charDiv = $("<div class='character' data-name='" + characters.name + "'>");
    let charName = $("<div class='character-name'>").text(characters.name);
                                                                                // need to take out hardcode and put image into JS file
    let charImage = $("<img class='character-image'>").attr("src", characters.imageURL);
    let charHealth = $("<div class='character-health'>").text(characters.health);
    charDiv.append(charName).append(charImage).append(charHealth);
    $(renderArea).append(charDiv);
};

var initializeGame = function () {
    for (let key in characters) {
        renderCharacter(characters[key], "#characters-section");
    }
};

initializeGame();

var updateCharacter = function (charObj, areaRender) {
    $(areaRender).empty();
    renderCharacter(charObj, areaRender);
};

var renderEnemies = function (enemyArr) {
    for (let i = 0; i < enemyArr.length; i++) {
        renderCharacter(enemyArr[i], "#available-to-attack-section");
    }
};

var renderMessage = function(message) {
    let gameMessageSet = $("#game-message");
    let newMessage = $("div").text(message);
    gameMessageSet.append(newMessage);
}

var restartGame = function (resultMessage) {
    let restart = $("<button>Restart</button>").click(function() {
        location.reload();
    });

    let gameState = $("<div>").text(resultMessage);

    $("body").append(gameState);
    $("body").append(restart);
};

var clearMessage = function () {
    let gameMessage = $("#game-message");

    gameMessage.text("");
};

$("#characters-section").on("click", ".character", function () {
    let name = $(this).attr("data-name");

    if(!attacker){
        attacker = characters[name];

        for (let key in characters){
            if (key !== name) {
                combatants.push(characters[key]);
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
        defender = characters[name];
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



});