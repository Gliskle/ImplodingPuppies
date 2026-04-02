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

    this.drawPile = this.add.text(960, 540, 'Pick Up Card', {
        fontSize: '25px',
        color: '#ffffff',
        align: 'center',
        fixedWidth: 260,
        backgroundColor: '#2d2d2d',
    }).setPadding(32).setOrigin(0.5);

    this.drawPile.setVisible(false)
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

    const player1 = this.player1 = this.add.text(1650, 25, 'Player1 (YOU)', {
        fontSize: '30px',
        color: '#ffffff',
        align: 'center',
    });
    player1.setVisible(false)

    const player2 = this.player2 = this.add.text(1650, 83, 'Player2', {
        fontSize: '30px',
        color: '#ffffff',
        align: 'center',
    });
    player2.setVisible(false)
}

function update ()
{
    if (newGame == true){
        newGame = false;
        this.startButton.setScale(0.5)
        this.startButton.setPosition(0,0)
        this.startButton.setOrigin(0,0)
        this.startButton.setText("New Game")
        this.drawPile.setVisible(true)
        this.player1.setVisible(true)
        this.player2.setVisible(true)

        const { hands, deck } = dealAndReshuffle(cards)

        player1Hand = hands[0];
        player2Hand = hands[1];
        currentDeck = deck;

        console.log( { player1Hand, player2Hand, currentDeck })
        console.log(currentDeck[0])

        if (turn == "player1"){
            this.player1.setColor("#8de8ff")
        }
        else {
            this.player1.setColor("#ffffff")
        }

        

        if (turn == "player2"){
            this.player2.setColor("#8de8ff")
        }
        else {
            this.player2.setColor("#ffffff")
        }
    }

    this.player1.setText(`Player1 (YOU)\n${player1Hand.length} Cards`)
    this.player2.setText(`Player2      \n${player2Hand.length} Cards`)
}



