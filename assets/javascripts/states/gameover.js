var LoonyGame = LoonyGame || {};

LoonyGame.GameOver = function () {};

LoonyGame.GameOver.prototype = {
  create: function() {
    this.game.add.text(80, 80, "GAME  OVER", { font: '50px PressStart', fill: '#FFFFFF'});
    var wkey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    wkey.onDown.addOnce(this.restart, this);
  },

  restart: function(){
    this.game.state.start("play");
  }
};
