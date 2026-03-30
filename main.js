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
    const lineHeight = 15;
    let lines = 0;
    this.add.text(0, lineHeight * lines++, 'hello world');
    for (let i = 0; i < cards.length; i++) {
        this.add.text(0, lineHeight * lines++, cards[i].title);
    }
}

function update ()
{

}