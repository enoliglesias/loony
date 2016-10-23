var LoonyGame = LoonyGame || {};

LoonyGame.Menu = function () {};

LoonyGame.Menu.prototype = {
  create: function() {
    this.game.add.text(80, 80, "TAP TO START", { font: '20px PressStart', fill: '#FFFFFF'});
    this.game.input.onDown.add(this.start, this);
  },

  start: function(){
    this.game.state.start("play");
  }
};
