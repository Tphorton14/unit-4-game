
//Declare global objects 

let attack;
let defense;
let attackCharater;
let attackerHealth;
let defenseCharactor;
let defenderHealth;
let name;
let yourCharacter;
let myPlayer = "";
let myDef = "";

const resetBtn = $(".resetButton")



const character = {
    ObiWan: {
        name: "Obiwan",
        hP: 120,
        attackPower: 8,
        counterAttack: 24
        
    },

    Rey: {
        name: "Rey",
        hP: 100,
        attackPower: 10,
        counterAttack: 5
    },

    darthVadar: {
        name: "DarthVadar",
        hP: 150,
        attackPower: 10,
        counterAttack: 25
    },

    kyloRyen: {
        name: "KyloRyen",
        hP: 180,
        attackPower: 12,
        counterAttack: 25
    }
}


function reset () {

    $("#playerPick").show();


}




// choose (by cicking) character
$(".players").click(function(){

    if (myPlayer === "") {
        console.log(this);
        $(this).appendTo("#myCharactor");
        myPlayer = $(this);
        yourCharacter = $(myPlayer).attr("value");
    }
//     
// move non-clicked characters to ___ container
// 

})


$(document).on("click", function () {
    console.log("clicked");
});