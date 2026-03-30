var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{

}

function create ()
{
    this.add.text(0, 0, 'hello world again')
    this.add.text(0, 10, 'you are a dog')
}

function update ()
{

}