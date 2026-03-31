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

function shuffleDeck(shuffleCards) {
    const deck = cards.flatMap(shuffleCards =>
        Array(shuffleCards.count).fill(shuffleCards.id)
    );

    // Fisher-Yates shuffle
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    return deck;
}

function shuffleDeckNoImploding(shuffleCards) {
    const deck = [];

    for (let card of shuffleCards) {
        if (card.id === "implodingPuppy") continue;

        let count = card.count;

        if (card.id === "defuse") {
            count -= 2;
        }

        for (let i = 0; i < count; i++) {
            deck.push(card.id);
        }
    }

    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    return deck;
}

function dealCardsWithDefuse(deck, numPlayers = 2, cardsPerPlayer = 7) {

    const hands = Array.from({ length: numPlayers }, () => []);
    for (let i = 0; i < cardsPerPlayer; i++) {
        for (let p = 0; p < numPlayers; p++) {
            if (deck.length === 0) {
                throw new Error("Not enough cards to deal");
            }

            hands[p].push(deck.shift());
        }
    }

    for (let p = 0; p < numPlayers; p++) {
        hands[p].push(2);
    }

    return {
        hands,
        remainingDeck: deck
    };
}