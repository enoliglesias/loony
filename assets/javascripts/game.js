var LoonyGame = LoonyGame || {};

LoonyGame.game = new Phaser.Game(640, 480, Phaser.AUTO, 'game-container');

LoonyGame.game.state.add("boot", LoonyGame.Boot);
LoonyGame.game.state.add("load", LoonyGame.Load);
LoonyGame.game.state.add("menu", LoonyGame.Menu);
LoonyGame.game.state.add("play", LoonyGame.Play);
LoonyGame.game.state.add("gameover", LoonyGame.GameOver);

LoonyGame.game.state.start("boot");
