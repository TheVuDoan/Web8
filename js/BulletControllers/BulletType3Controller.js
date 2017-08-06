class BulletType3Controller extends BulletController {
  constructor(x, y, configs){
    super(x, y, "BulletType3.png",configs);
    this.sprite.lifespan = 250;
    this.configs = configs;
    if (this.configs.direction == 'left') {
      this.sprite.anchor = new Phaser.Point(0,1);
    }
    else {
      this.sprite.anchor = new Phaser.Point(1,1);
    }
    this.sprite.update = this.update.bind(this);
  }

  update(){
    this.sprite.x = this.configs.shooter.sprite.x;
    this.sprite.y = this.configs.shooter.sprite.y - this.configs.shooter.sprite.height/8;
  }
}
