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
            const button = this.add.text(400, 300, 'Play Game', {
                fontSize: '32px',
                color: '#ffffff',
                align: 'center',
                fixedWidth: 260,
                backgroundColor: '#2d2d2d',
                borderRadius: '8px'
            }).setPadding(32).setOrigin(0.5);

            button.setInteractive({ useHandCursor: true });

            button.on('pointerover', () => {
            button.setBackgroundColor('#8d8d8d');
            });

            button.on('pointerout', () => {
                button.setBackgroundColor('#2d2d2d');
            });
        }
    }

    const config = {
        type: Phaser.AUTO,
        parent: 'phaser-example',
        width: 800,
        height: 600,
        scene: Example
    };

    const game = new Phaser.Game(config);
}

function update ()
{

}