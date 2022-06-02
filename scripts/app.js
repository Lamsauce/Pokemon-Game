const pokemon = [
    {
        name: "BULBASAUR",
        type: ["Grass", "Poison"],
        attacks: ["Tackle", "Leer", "Vine Whip"],
        sprite: "./images/bulbasaur.gif",
    },
    {
        name: "CHARMANDER",
        type: ["Fire", null],
        attacks: ["Scratch", "Growl", "Ember"],
        sprite: "./images/charmander.gif",
    },
    {
        name: "SQUIRTLE",
        type: ["Water", null],
        attacks: ["Tackle", "Withdraw", "Bubble"],
        sprite: "./images/squirtle.gif",
    }
];

class Starters {
    constructor(name){
        this.name;
        this.type;
    }

    makeStarters = function makeStarters(data){
        data.forEach(pokemon => {

            //create cards
            $('<div>', {
                class:"card",
                id: pokemon.name,
            }).appendTo('.starters');

            //adds name to cards
            $("body").find('#' + pokemon.name).prepend(
                $('<p>', {
                    id: "pokemon-name",
                    text: pokemon.name,
                })
            );

            //adds sprites to cards
            $("body").find('#' + pokemon.name).prepend(
                $('<img/>', {
                    class: "select-sprite",
                    id: pokemon.name + "-sprite",
                    src: pokemon.sprite,
                    })
                );

            //add types to cards
                // dual-types
            if (pokemon.type[1] != null){
                $("body").find('#' + pokemon.name).append($('<div>', {
                id: "pokemon-type",
                text: pokemon.type[0] + " " + pokemon.type[1],
                }));
            }

                // single-type
            else {
                $("body").find('#' + pokemon.name).append($('<div>', {
                id: "pokemon-type",
                text: pokemon.type[0],
                }));
            }
        });
    }
};


// SELECT STARTER
    //BULBASAUR
$(".starters").on("click", ".card", function(){
    let select = $(this).attr("id");
    $(".card").hide();
    alert("You selected " + select + "!");
    startGame();
});

function startGame(){
    console.log("[ Game is in development ]");
    $('<h1>', {
        text: "[ Game is in development ]",
    }).appendTo('.starters');

}

const playerPokemon = new Starters;
playerPokemon.makeStarters(pokemon);