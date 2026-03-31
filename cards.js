const cards = [
    {
        title: "Imploding Puppy",
        desc: "Show this card imediatly. Unless you have a Defuse or a Deflect, you are dead.",
        type: "imploding-puppy",
        count: 1
    },
    {
        title: "Defuse",
        desc: "If you picked up an Imploding Puppy, you may play this card and shuffle it back into the deck without exploding and end your turn.",
        type: "defuse",
        count: 3
    },
    {
        title: "Deflect",
        desc: "If you picked up an Imploding Puppy, you may deflect the Imploding Puppy to another player and the turn goes to them.",
        type: "deflect",
        count: 1
    },
    {
        title: "Guardian Angel",
        desc: "When a player tries to play a card directed to you, you may play this card and the card they played will be directed toward them. Once dealt with, the turn will return to them.",
        type: "guardian-angel",
        count: 5
    },
    {
        title: "Swap",
        desc: "Choose a player to swap hands with. You may continue your turn with their cards.",
        type: "swap",
        count: 3
    },
    {
        title: "Hand out",
        desc: "Pass the top card of the deck to another player. End your turn.",
        type: "hand-out",
        count: 4
    },
    {
        title: "Skip",
        desc: "End your turn without picking up any cards.",
        type: "skip",
        count: 5
    },
    {
        title: "Shuffle",
        desc: "Shuffle the deck.",
        type: "shuffle",
        count: 6
    },
    {
        title: "Draw Anywhere",
        desc: "Pick up from anywhere in the deck.",
        type: "draw-anywhere",
        count: 5
    },
    {
        title: "Hot Dawg",
        desc: "Take a card from another player.",
        type: "hot-dawg",
        count: 5
    }
];

window.cards = cards;

function expand(cardsWithCounts) {
    const expanded = [];
// to do
    return expanded
}

function shuffle(expandedArray) {
    const shuffledDeck = [];
// to do
    }
    return shuffledDeck;
}

function deal() {
    const results = {
        player1: [],
        player2: [],
        drawPile: []
    };
// to do
    return results
}