
//Declare global objects 

let attack;
let defense;
let power;
let attackCharater;
let attackerHealth;
let defenseCharactor;
let defenderHealth;
let name;
let yourCharacter;
let myPlayer = "";
let myDef = "";





const character = {
    ObiWan: {
        name: "Obiwan",
        hP: 120,
        aPower: 8,
        counterAttack: 24

    },

    Rey: {
        name: "Rey",
        hP: 100,
        aPower: 10,
        counterAttack: 5
    },

    darthVadar: {
        name: "DarthVadar",
        hP: 150,
        aPower: 10,
        counterAttack: 25
    },

    kyloRyen: {
        name: "KyloRyen",
        hP: 180,
        aPower: 12,
        counterAttack: 25
    }
}


$("restartBtn").on("click", function () {
    // Restart the program whenever the user clicks the mouse
    document.restart();




});



// $(document).ready(function () {
//     reset();

// });
// choose (by cicking) character
$(".players").click(function () {

    if (myPlayer == "") {
        console.log(this);
        $(this).appendTo("#myCharacter");
        myPlayer = $(this);
        yourCharacter = $(myPlayer).attr("value");
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
    // move non-clicked characters to ___ container
    //   
    for (let i = 0; i < 4; i++) {
        $(".players" + [i]).not(myPlayer).appendToChild("#enemy" + [i]);
    }



});