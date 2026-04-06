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
let redrawCards = false;


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

    this.drawPile = this.add.text(980, 540, 'Draw\nPile', {
        fontSize: '24px',
        color: '#ffffff',
        fixedWidth: 100,
        fixedHeight: 125,
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
        if (turn == "player1"){
            if (currentDeck.length !== 0){
                player1Hand.push(currentDeck.shift())
                console.log(player1Hand)
                turn = "player2"
                this.player1.setColor("#ffffff")
                this.player2.setColor("#8de8ff")
                redrawCards = true;
            }
            else {
                console.error("No cards to draw from")
            }
        }
        else{
            console.error("Not your turn")
        }
    });

    this.drawPile.on('pointerup', () => {
        this.drawPile.setBackgroundColor('#8d8d8d')
    });

    const player1 = this.player1 = this.add.text(1650, 25, 'Player1 (YOU)', {
        fontSize: '30px',
        color: '#ffffff',
        align: 'center',
    });
    this.player1.setVisible(false)

    const player2 = this.player2= this.add.text(1650, 83, 'Player2', {
        fontSize: '30px',
        color: '#ffffff',
        align: 'center',
    });
    this.player2.setVisible(false)

    const playerHand = this.playerHand = this.add.container(55, 850);

    const discardPile = this.discardPile = this.add.text(860, 540, 'Pile', {
        fontSize: '24px',
        color: '#ffffff',
        fixedWidth: 100,
        fixedHeight: 125,
        backgroundColor: '#2d2d2d',
    }).setPadding(32).setOrigin(0.5);
    this.discardPile.setVisible(false)
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
        this.player1.setColor("#8de8ff")
        this.player2.setColor("#ffffff")
        this.discardPile.setVisible(true)
        turn = "player1"

        const { hands, deck } = dealAndReshuffle(cards)

        player1Hand = hands[0];
        player2Hand = hands[1];
        currentDeck = deck;
        redrawCards = true;

        console.log( { player1Hand, player2Hand, currentDeck })
        console.log(currentDeck[0])
        console.log(Math.floor(Math.random() * 100) + 1)
    }

    this.player1.setText(`Player1 (YOU)\n${player1Hand.length} Cards`)
    this.player2.setText(`Player2      \n${player2Hand.length} Cards`)

    if (redrawCards == true){
        this.playerHand.removeAll();
        const cardWidth = 110;
        if (discardPile.length){
            this.discardPile.setText(discardPile[discardPile.length - 1])
        }

        function clickHandler(){
            const clickedCard = this.text;
            discardPile.push(clickedCard);
            player1Hand.splice(player1Hand.indexOf(clickedCard), 1);
            redrawCards = true;
        }
        
        for (let i = 0; i < player1Hand.length; i++){
            let thisText = this.add.text(i * cardWidth,0,player1Hand[i],{
                color: "#ffffff",
                fontSize: "16px",
                backgroundColor: "#2d2d2d",
                Align: "center",
                fixedWidth: 100,
                fixedHeight: 125
            }).setOrigin(0.5).setPadding({left: 20, top: 20});
            this.playerHand.add(thisText)
            thisText.setInteractive({useHandCursor: true});
            thisText.on("pointerup",clickHandler)
        }
        redrawCards = false;
    }
    if (turn == "player2"){
        turn = "bot1"
        this.time.delayedCall(1500, onEvent, [], this); 

        function onEvent() {
            player2Hand.push(currentDeck.shift())
            turn = "player1"
            this.player2.setColor("#ffffff")
            this.player1.setColor("#8de8ff")
        }
    }
}




