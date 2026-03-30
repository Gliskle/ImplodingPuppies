const cards = [
    {
        title: "Imploding Puppy",
        desc: "Show this card imediatly. Unless you have a Defuse or a Deflect, you are dead",
        type: "imploding-puppy"
    },
    {
        title: "Defuse",
        desc: "If you picked up an Imploding Puppy, you may play this card and shuffle it back into the deck without exploding and end your turn",
        type: "defuse"
    },
    {
        title: "Deflect",
        desc: "If you picked up an Imploding Puppy, you may deflect the Imploding Puppy to another player and the turn goes to them",
        type: "deflect"
    },
    {
        title: "Guardian Angel",
        desc: "When a player tries to play a card directed to you, you may play this card and the card they played will be directed toward them. Once dealt with, the turn will return to them",
        type: "guardian-angel"
    },
    {
        title: "Swap",
        desc: "Choose a player to swap hands with",
        type: "swap"
    },
];

module.exports = cards;