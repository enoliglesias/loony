var LoonyGame = LoonyGame || {};

LoonyGame.Loony = function(game, input, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'loony');
  this.game = game;
  this.input = input;
  this.alive = true;

  // physics
  this.game.physics.arcade.enable(this, Phaser.Physics.ARCADE);
  this.body.collideWorldBounds = true;
  // this.body.gravity.y = 350;

  // add to the game
  this.game.add.existing(this);
};

LoonyGame.Loony.prototype = Object.create(Phaser.Sprite.prototype);
LoonyGame.Loony.prototype.constructor = LoonyGame.Loony;

LoonyGame.Loony.prototype.update = function() {

};
