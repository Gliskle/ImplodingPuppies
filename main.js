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

function preload ()
{

}

function create ()
{
    const lineHeight = 17;
    let lines = 0;
    // this.add.text(0, lineHeight * lines++, 'hello world');
    // for (let i = 0; i < cards.length; i++) {
    //    this.add.text(0, lineHeight * lines++, cards[i].title);
    // }
    class Example extends Phaser.Scene
    {
        create ()
        {
            const startButton = this.add.text(100, 100, 'Start Game', {
                fontSize: '32px',
                color: '#ffffff',
                align: 'center',
                fixedWidth: 500,
                backgroundColor: '#2d2d2d',
                borderRadius: '10px'
            }).setPadding(32).setOrigin(0.5);

            startButton.setInteractive({ useHandCursor: true });

            startButton.on('pointerover', () => {
                startButton.setBackgroundColor('#8d8d8d');
            });

            startButton.on('pointerout', () => {
                startButton.setBackgroundColor('#2d2d2d');
            });

            startButton.on('pointerup', () => {
                create ()
                {
                    const numPlayers = this.add.text()
                }
            })
        }
    }

    const bconfig = {
        type: Phaser.AUTO,
        parent: 'phaser-example',
        width: 800,
        height: 600,
        scene: Example
    };

    const game = new Phaser.Game(bconfig);
}

function update ()
{

}