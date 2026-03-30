const cards = [
    {
        title: "Imploding Puppy",
        desc: "Show this card imediatly. Unless you have a Defuse or a Deflect, you are dead.",
        type: "imploding-puppy"
    },
    {
        title: "Defuse",
        desc: "If you picked up an Imploding Puppy, you may play this card and shuffle it back into the deck without exploding and end your turn.",
        type: "defuse"
    },
    {
        title: "Deflect",
        desc: "If you picked up an Imploding Puppy, you may deflect the Imploding Puppy to another player and the turn goes to them.",
        type: "deflect"
    },
    {
        title: "Guardian Angel",
        desc: "When a player tries to play a card directed to you, you may play this card and the card they played will be directed toward them. Once dealt with, the turn will return to them.",
        type: "guardian-angel"
    },
    {
        title: "Swap",
        desc: "Choose a player to swap hands with. You may continue your turn with their cards.",
        type: "swap"
    },
    {
        title: "Hand out",
        desc: "Pass the top card of the deck to another player. Unless they play a Guardian Angel, end your turn.",
        type: "hand-out"
    },
    {
        title: "Skip",
        desc: "End your turn without picking up any cards.",
        type: "skip"
    },
    {
        title: "Shuffle",
        desc: "Shuffle the deck.",
        type: "shuffle"
    },
    {
        title: "Draw Anywhere",
        desc: "Pick up from anywhere in the deck.",
        type: "draw-anywhere"
    },
    {
        title: "Hot Dawg",
        desc: "Take a card from another player.",
        type: "hot-dawg"
    }
];

window.cards = cards;