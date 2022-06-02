const pokemon = [
    {
        name: "BULBASAUR",
        type: ["Grass", "Poison"],
        attacks: ["Tackle", "Leer", "Vine Whip"]
    },
    {
        name: "CHARMANDER",
        type: ["Fire", null],
        attacks: ["Scratch", "Growl", "Ember"]
    },
    {
        name: "SQUIRTLE",
        type: ["Water", null],
        attacks: ["Tackle", "Withdraw", "Bubble"]
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
            $('<div>',{
                class:"card",
                id: pokemon.name,
                text: pokemon.name,
            }).appendTo('.starters');

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

const playerPokemon = new Starters;
playerPokemon.makeStarters(pokemon);