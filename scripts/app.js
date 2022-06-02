const pokemon = [
    {
        name: "Bulbasaur",
        type: ["Grass", "Poison"],
        attacks: ["Tackle", "Leer", "Vine Whip"]
    },
    {
        name: "Charmander",
        type: ["Fire", null],
        attacks: ["Scratch", "Growl", "Ember"]
    },
    {
        name: "Squirtle",
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
            let starter = pokemon.name;
            console.log(starter);
        });
    }
};

const playerPokemon = new Cards;
playerPokemon.makeCards(pokemon);

