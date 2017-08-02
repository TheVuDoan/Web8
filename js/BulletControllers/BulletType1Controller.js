class BulletType1Controller extends BulletController {
  constructor(x, y, configs){
    super(x, y, "BulletType1.png",configs);
    this.BULLET_SPEED = 600;
    this.sprite.body.velocity.y = -this.BULLET_SPEED;
  }
}
