var LoonyGame = LoonyGame || {};

LoonyGame.Boot = function () {};

LoonyGame.Boot.prototype = {
  create: function() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE)
    this.game.state.start("load");
  }
};
