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
            $('<div>',{
                id: pokemon.name,
                text: pokemon.name,
            }).appendTo('.starters');

            console.log(pokemon.type[0]);
            if (pokemon.type[1] != null){
                console.log(pokemon.type[1]);
            }
        });
    }
};

const playerPokemon = new Starters;
playerPokemon.makeStarters(pokemon);