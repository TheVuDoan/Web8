class BulletController {
  constructor(x, y, spriteName, configs) {
    //this.sprite = Nakama.game.add.sprite(x, y, 'assets', spriteName);
    this.configs = configs;
    Nakama.game.physics.arcade.enable(this.sprite);
    //this.sprite.update = this.update.bind(this);
  }

  update() {
    if (Nakama.keyboard.isDown(this.configs.fire)){
      fireBullet(x, y, spriteName, configs);
  }
}

function fireBullet(x, y, spriteName, configs){
    this.sprite = Nakama.game.add.sprite(x, y, 'assets', spriteName);
    this.sprite.body.velocity.y = -300;
}
