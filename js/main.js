var Nakama = {};
Nakama.configs = {
  GAME_WIDTH: 640,
  GAME_HEIGHT: 960,
  PLAYER1_STARTX: 200,
  PLAYER1_STARTY: 400,
  PLAYER2_STARTX: 400,
  PLAYER2_STARTY: 400,
  ENEMY_STARTX: 100,
  ENEMY_STARTY: 100,
  ENEMY_HEALTH: 5
};

window.onload = function(){
  Nakama.game = new Phaser.Game(
    Nakama.configs.GAME_WIDTH,
    Nakama.configs.GAME_HEIGHT,
    Phaser.AUTO,'',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
    }, false, false
  );
}

// preparations before game starts
var preload = function(){
  Nakama.game.scale.minWidth = Nakama.configs.GAME_WIDTH/2;
  Nakama.game.scale.minHeight = Nakama.configs.GAME_HEIGHT/2;
  Nakama.game.scale.maxWidth = Nakama.configs.GAME_WIDTH;
  Nakama.game.scale.maxHeight = Nakama.configs.GAME_HEIGHT;
  Nakama.game.scale.pageAlignHorizontally = true;
  Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  Nakama.game.time.advancedTiming = true;

  Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
  Nakama.game.load.image('background', 'Assets/Map1.png');
}

// initialize the game
var create = function(){
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
  Nakama.keyboard = Nakama.game.input.keyboard;

  Nakama.background = Nakama.game.add.sprite(0, -960, 'background');
  Nakama.bulletGroup = Nakama.game.add.physicsGroup();
  Nakama.playerGroup = Nakama.game.add.physicsGroup();
  Nakama.enemyGroup = Nakama.game.add.physicsGroup();

  Nakama.players = [];
  Nakama.players.push(
    new ShipType2Controller(
      Nakama.configs.PLAYER1_STARTX,
      Nakama.configs.PLAYER1_STARTY,
      '-Player',
      {
        up : Phaser.Keyboard.UP,
        down : Phaser.Keyboard.DOWN,
        left : Phaser.Keyboard.LEFT,
        right : Phaser.Keyboard.RIGHT,
        fire : Phaser.Keyboard.SPACEBAR
      }
    )
  );
  Nakama.players.push(
    new ShipType1Controller(
      Nakama.configs.PLAYER2_STARTX,
      Nakama.configs.PLAYER2_STARTY,
      '-Partner',
      {
        up : Phaser.Keyboard.W,
        down : Phaser.Keyboard.S,
        left : Phaser.Keyboard.A,
        right : Phaser.Keyboard.D,
        fire : Phaser.Keyboard.F
      }
    )
  );
  Nakama.enemies = [];
  Nakama.enemies.push(new EnemyController(
    Nakama.configs.ENEMY_STARTX,
    Nakama.configs.ENEMY_STARTY,
    'EnemyType1.png',
    {
      health : Nakama.configs.ENEMY_HEALTH
    }
  )
  );
}

// update game state each frame
var update = function(){

  //moving background
  Nakama.background.position.y += 5;
  if (Nakama.background.position.y > 0) Nakama.background.position.y -= 960;

  Nakama.game.physics.arcade.overlap(
    Nakama.bulletGroup,
    Nakama.enemyGroup,
    onBulletHitEnemy
  );
}

// before camera render (mostly for debug)
var render = function(){}

var onBulletHitEnemy = function(bulletSprite, enemySprite){
  bulletSprite.kill();
  enemySprite.damage(1);
  if (enemySprite.alive == false) {
    setTimeout(function() {
      Nakama.enemies.push(new EnemyController(
        Nakama.configs.ENEMY_STARTX,
        Nakama.configs.ENEMY_STARTY,
        'EnemyType1.png',
        {
          health: Nakama.configs.ENEMY_HEALTH
        }
      )
    );
    }, 1000);
  }
}
