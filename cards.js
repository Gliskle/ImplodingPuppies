const cards = [
    {
        title: "Imploding Puppy",
        desc: "Show this card imediatly. Unless you have a Defuse or a Deflect, you are dead.",
        id: "implodingPuppy",
        count: 1
    },
    {
        title: "Defuse",
        desc: "If you picked up an Imploding Puppy, you may play this card and shuffle it back into the deck without exploding and end your turn.",
        id: "defuse",
        count: 3
    },
    {
        title: "Deflect",
        desc: "If you picked up an Imploding Puppy, you may deflect the Imploding Puppy to another player and the turn goes to them.",
        id: "deflect",
        count: 1
    },
    {
        title: "Guardian Angel",
        desc: "When a player tries to play a card directed to you, you may play this card and the card they played will be directed toward them. Once dealt with, the turn will return to them.",
        id: "guardianAngel",
        count: 5
    },
    {
        title: "Swap",
        desc: "Choose a player to swap hands with. You may continue your turn with their cards.",
        id: "swap",
        count: 3
    },
    {
        title: "Hand out",
        desc: "Pass the top card of the deck to another player. End your turn.",
        id: "handOut",
        count: 4
    },
    {
        title: "Skip",
        desc: "End your turn without picking up any cards.",
        id: "skip",
        count: 5
    },
    {
        title: "Shuffle",
        desc: "Shuffle the deck.",
        id: "shuffle",
        count: 6
    },
    {
        title: "Draw Anywhere",
        desc: "Pick up from anywhere in the deck.",
        id: "drawAnywhere",
        count: 5
    },
    {
        title: "Hot Dawg",
        desc: "Take a card from another player.",
        id: "hotDawg",
        count: 5
    }
];

window.cards = cards;

function dealAndReshuffle(shuffledCards, numPlayers = 2, cardsPerPlayer = 7) {
    const hands = Array.from({ length: numPlayers }, () => []);

    let tempDeck = [];

    for (let card of shuffledCards) {
        if (card.id === "implodingPuppy") continue;

        let count = card.count;

        if (card.id === "defuse") {
            count -= numPlayers;
        }

        for (let i = 0; i < count; i++) {
            tempDeck.push(card.id);
        }
    }

    for (let i = tempDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tempDeck[i], tempDeck[j]] = [tempDeck[j], tempDeck[i]];
    }

    const usedCards = {};

    for (let i = 0; i < cardsPerPlayer; i++) {
        for (let p = 0; p < numPlayers; p++) {
            const card = tempDeck.shift();
            hands[p].push(card);

            usedCards[card] = (usedCards[card] || 0) + 1;
        }
    }

    for (let p = 0; p < numPlayers; p++) {
        hands[p].push("defuse");
        usedCards[2] = (usedCards[2] || 0) + 1;
    }

  let newDeck = [];

    for (let card of cards) {
        let remaining = card.count - (usedCards[card.id] || 0);

        for (let i = 0; i < remaining; i++) {
            newDeck.push(card.id);
        }
    }

    for (let i = newDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }

    return {
        hands,
        deck: newDeck
    };
}



