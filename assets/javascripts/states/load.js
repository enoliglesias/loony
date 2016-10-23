var LoonyGame = LoonyGame || {};

LoonyGame.Load = function () {}

LoonyGame.Load.prototype = {
  preload: function() {
    this.game.load.image('loony', 'assets/images/loony.png');
  },

  loadUpdate: function(){
    var bars = "|".repeat(this.load.progress/3);
    this.game.add.text(250, 150, bars, { font: '60px PressStart', fill: '#76FF03' });
  },

  create: function(){
    this.game.state.start("menu");
  }

};
