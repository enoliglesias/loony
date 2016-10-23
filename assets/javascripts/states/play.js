var LoonyGame = LoonyGame || {};

LoonyGame.global_gravity = 1200;

LoonyGame.Play = function () {};

LoonyGame.Play.prototype = {

  create: function() {
    this.game.stage.backgroundColor = "#ededed";

    // Add general gravity to world
    this.game.physics.arcade.gravity.y = LoonyGame.global_gravity;

    // Create loony
    this.input = new LoonyGame.Input(this.game);
    this.loony = new LoonyGame.Loony(this.game, this.input, 50, 50);

  },

  update: function() {
  },


};
