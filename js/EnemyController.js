class EnemyController{
  constructor(x, y, spriteName ,configs){
    this.sprite = Nakama.enemyGroup.create(x, y, "assets", spriteName);
    this.sprite.body.collideWorldBounds = true;
    this.configs = configs;

    this.ENEMY_SPEED = 500;

    this.sprite.health = this.configs.health;

    this.sprite.update = this.update.bind(this);
    this.sprite.body.velocity.x = -this.ENEMY_SPEED;
  }

  update(){
    if (this.sprite.position.x <= 0) {
      this.sprite.body.velocity.x = this.ENEMY_SPEED;
    }
    else if (this.sprite.position.x >= Nakama.configs.GAME_WIDTH-this.sprite.width) {
      this.sprite.body.velocity.x = -this.ENEMY_SPEED;
    }
  }
}
