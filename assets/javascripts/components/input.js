var LoonyGame = LoonyGame || {};

LoonyGame.Input = function(game) {
  this.game = game;
  this.game.input.onDown.add(this.tap, this);
};

LoonyGame.Input.prototype.constructor = LoonyGame.Input;

LoonyGame.Input.prototype.update = function() {

};

LoonyGame.Input.prototype.tap = function() {
  var actual_gravity = this.game.physics.arcade.gravity.y;
  this.game.physics.arcade.gravity.y = (-1) * actual_gravity;
};
