class ShipController{
  constructor(x, y, spriteName,configs){
    this.sprite = Nakama.playerGroup.create(x, y, "assets", spriteName);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);

    this.configs = configs;
    this.configs.SHIP_SPEED = 500;

    this.bullets = [];
    this.bullets.BULLET_TIME = 300;  //time between shot
    this.bullets.time = this.bullets.BULLET_TIME; //first shot

    this.sprite.update = this.update.bind(this);
  }

  update(){
    if (Nakama.keyboard.isDown(this.configs.left)){
      this.sprite.body.velocity.x = -this.configs.SHIP_SPEED;
    }
    else if (Nakama.keyboard.isDown(this.configs.right)){
      this.sprite.body.velocity.x = this.configs.SHIP_SPEED;
    }
    else {
      this.sprite.body.velocity.x = 0;
    }

    if (Nakama.keyboard.isDown(this.configs.up)){
      this.sprite.body.velocity.y = -this.configs.SHIP_SPEED;
    }
    else if (Nakama.keyboard.isDown(this.configs.down)){
      this.sprite.body.velocity.y = this.configs.SHIP_SPEED;
    }
    else {
      this.sprite.body.velocity.y = 0;
    }

    //shoot then wait
    if (Nakama.keyboard.isDown(this.configs.fire) && Nakama.game.time.time > this.bullets.time){
      this.bullets.push(new BulletController(
        this.sprite.position.x,
        this.sprite.position.y,
        'BulletType1.png'
      )
      );
      this.bullets.time = Nakama.game.time.time + this.bullets.BULLET_TIME;
    }
  }
}

// TODO ...
