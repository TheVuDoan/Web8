class ShipController{
  constructor(x, y, spriteName,configs){
    this.sprite = Nakama.game.add.sprite(x, y, "assets", spriteName);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;

    this.configs = configs;
    this.configs.SHIP_SPEED = 500;

    this.bullets = [];
    this.bullets.BULLET_TIME = 10;  //time between shot
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
    //time between shot
    if (this.bullets.time < this.bullets.BULLET_TIME) this.bullets.time++;  //wait for reload :D
    //shoot then wait
    if (Nakama.keyboard.isDown(this.configs.fire) && this.bullets.time == this.bullets.BULLET_TIME){
      this.bullets.push(new BulletController(this.sprite.position.x + this.sprite.width/4, this.sprite.position.y, 'BulletType1.png'));
      this.bullets.time = 0;
    }
  }
}
