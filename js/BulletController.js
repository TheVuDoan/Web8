class BulletController {
  constructor(x, y, spriteName) {
    this.sprite = Nakama.bulletGroup.create(x, y, 'assets', spriteName);
    this.sprite.checkWorldBounds = true;
    this.sprite.outOfBoundsKill = true;
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);

    this.BULLET_SPEED = 600;
    this.sprite.body.velocity.y = -this.BULLET_SPEED;
  }
}
