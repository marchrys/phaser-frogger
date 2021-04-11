// create a new scene named "Game"
let gameScene = new Phaser.Scene('Game');
	
// load asset files for our game
gameScene.preload = function() {
 
  // load images
  this.load.image('background', 'assets/background.png');
  this.load.image('player', 'assets/player.png');
  this.load.image('dragon', 'assets/dragon.png');
  this.load.image('treasure', 'assets/treasure.png');
};
 
// executed once, after assets were loaded
gameScene.create = function() {
 
   // background
   this.add.sprite(320, 180, 'background');

   // player
  this.player = this.add.sprite(40, this.sys.game.config.height / 2, 'player');
 
  // scale down
  this.player.setScale(0.5);
}
 
// our game's configuration
let config = {
  type: Phaser.AUTO,  //Phaser will decide how to render our game (WebGL or Canvas)
  width: 640, // game width
  height: 360, // game height
  scene: gameScene // our newly created scene
};
 
// create the game, and pass it the configuration
let game = new Phaser.Game(config);