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

class Cards {
    constructor(name){
        this.name;
        this.type;
    }

    makeCards = function makeCards(data){
        data.forEach(pokemon => {
            console.log(pokemon.name);
            console.log(pokemon.type[0]);
            if (pokemon.type[1] != null){
                console.log(pokemon.type[1]);
            }
        });
    }
};

const playerPokemon = new Cards;
playerPokemon.makeCards(pokemon);

