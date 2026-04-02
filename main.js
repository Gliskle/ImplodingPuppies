const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let player1Hand = [];
let player2Hand = [];
let currentDeck = [];
let turn = "player1";
let discardPile = [];
let newGame = false;


function preload ()
{
    
}

function create ()
{
    const startButton = this.startButton = this.add.text(960, 540, 'Play Game', {
        fontSize: '32px',
        color: '#ffffff',
        align: 'center',
        fixedWidth: 260,
        backgroundColor: '#2d2d2d'
    }).setPadding(32).setOrigin(0.5);

    this.startButton.setInteractive({ useHandCursor: true });

    this.startButton.on('pointerover', () => {
        this.startButton.setBackgroundColor('#8d8d8d');
    });

    this.startButton.on('pointerout', () => {
        this.startButton.setBackgroundColor('#2d2d2d');
    });

    this.startButton.on('pointerdown', () => {
        this.startButton.setBackgroundColor("#4d4d4d")
    });

    this.startButton.on('pointerup', () => {
        this.startButton.setBackgroundColor("#8d8d8d")
        newGame = true;
    });
}

function update ()
{
    if (newGame == true){
        newGame = false;
        this.startButton.setScale(0.5)
        this.startButton.setPosition(0,0)
        this.startButton.setOrigin(0,0)
        this.startButton.setText("New Game")

        const { hands, deck } = dealAndReshuffle(cards)

        player1Hand = hands[0];
        player2Hand = hands[1];
        currentDeck = deck;

        console.log( { player1Hand, player2Hand, currentDeck })
        console.log(currentDeck[0])

        const drawPile = this.drawPile = this.add.text(960, 540, 'Pick Up Card', {
            fontSize: '25px',
            color: '#ffffff',
            align: 'center',
            fixedWidth: 260,
            backgroundColor: '#2d2d2d'
        }).setPadding(32).setOrigin(0.5);

        this.drawPile.setInteractive({ useHandCursor: true});

        this.drawPile.on('pointerover', () => {
            this.drawPile.setBackgroundColor('#8d8d8d')
        });

        this.drawPile.on('pointerout', () => {
            this.drawPile.setBackgroundColor('#2d2d2d')
        });

        this.drawPile.on('pointerdown', () => {
            this.drawPile.setBackgroundColor('#4d4d4d')
        });

        this.drawPile.on('pointerup', () => {
            this.drawPile.setBackgroundColor('#8d8d8d')
        });

        const player1Turn = this.player1Turn = this.add.text(1775, 30, 'Player1 (YOU)', {
            fontSize: '30px',
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);
    }
}



