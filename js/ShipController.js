class ShipController{
  constructor(x, y, spriteName,configs){
    this.sprite = Nakama.game.add.sprite(x, y, "assets", spriteName);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;

    this.configs = configs;
    this.configs.SHIP_SPEED = 500;

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
  }
}
