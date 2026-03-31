const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

const lineHeight = 17;
let lines = 0;
let centerX = this.cameras.main.width / 2;
let centerY = this.cameras.main.height / 2;

function preload ()
{

}

function create ()
{
    const startButton = this.startButton = this.add.text(600, 450, 'Play Game', {
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
        startGame()
    });

    function startGame ()
    {
       startButton.setScale(0.5)
       startButton.setPosition(0,0)
       startButton.setOrigin(0,0)
       startButton.setText("New Game")

       const { hands, deck } = dealAndReshuffle(cards)

       console.log( { hands, deck })

       const drawPile = this.drawPile = this.add.text(600, 450, 'Pick Up Card', {
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
    }
}

function update ()
{

}

