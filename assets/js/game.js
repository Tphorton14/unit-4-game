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





const character = {
    "ObiWan": {
        name: "Obiwan",
        hP: 120,
        aPower: 8,
        counterAttack: 24

    },

    "Rey": {
        name: "Rey",
        hP: 100,
        aPower: 10,
        counterAttack: 5
    },

    "darthVadar": {
        name: "DarthVadar",
        hP: 150,
        aPower: 10,
        counterAttack: 25
    },

    "kyloRyen": {
        name: "KyloRyen",
        hP: 180,
        aPower: 12,
        counterAttack: 25
    }
};

let attacker;
let combatants = [];
let defender;
let turnCounter = 1;
let killCout = 0;

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
    for (let ket in characters) {
        renderCharacter(characters[key], "#characters-selection");
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


$("restartBtn").on("click", function () {
    // Restart the program whenever the user clicks the mouse
    document.restart();




});



// $(document).ready(function () {
//     reset();

// });
// choose (by cicking) character
$(".players").click(function () {

    for (let i = 0; i < 4; i++)

    if (myPlayer == "") {
        $(this).appendTo("#myCharacter");
        console.log(this.data-name);
        myPlayer = $(this);
        yourCharacter = $(myPlayer).attr("value");
    }
    else {
        $(".players").not(myPlayer).appendTo("#enemy", [i]);
    }

    if (yourCharacter == character.ObiWan.name) {
        attackerHealth = character.ObiWan.hp;
        aPower = character.ObiWan.aPower;
        attack = characters.ObiWan;
    }

    else if (yourCharacter == character.Rey.name) {
        attackerHealth = character.Rey.hp;
        aPower = character.Rey.aPower;
        attack = characters.Rey;
    }
    else if (yourCharacter == character.darthVadar.name) {
        attackerHealth = character.darthVadar.hp;
        aPower = character.darthVadar.aPower;
        attack = characters.darthVadar;
    }
    else if (yourCharacter == character.kyloRyen.name) {
        attackerHealth = character.kyloRyen.hp;
        aPower = character.dkyloRyen.aPower;
        attack = characters.kyloRyen;
    }
   



});

$("#enemy").click(function(){
    if (myDef == "") {
        $(this).appendTo("#bad");
        myDef = $(this);
        console.log(this);
        badCharacter = $(myDef).attr("value");


    }
    

});

});