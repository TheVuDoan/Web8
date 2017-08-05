class BulletType2Controller extends BulletController {
  constructor(x, y, configs){
    super(x, y, "BulletType2.png", configs);
    this.configs = configs;
    this.configs.MISSILE_SPEED = 300;
    this.configs.TURN_RATE = 5;
    if (this.configs.direction == 'left') {
      this.sprite.anchor = new Phaser.Point(0, 0.5);
    } else {
      this.sprite.anchor = new Phaser.Point(1, 0.5);
    }
    this.sprite.update = this.update.bind(this);
  }

  update(){
    this.target = Nakama.enemyGroup.getFirstAlive();

    if (this.target != null) {
      this.targetAngle = Nakama.game.math.angleBetween(
        this.sprite.position.x,
        this.sprite.position.y,
        this.target.position.x,
        this.target.position.y
      );

      this.targetAngle += Math.PI/2; //rotate the sprite

      if (this.sprite.rotation !== this.configs.targetAngle) {
          this.delta = this.targetAngle - this.sprite.rotation;

          if (this.delta > Math.PI) this.delta -= Math.PI * 2;  //Keep delta bettween -180 and 180
          if (this.delta < -Math.PI) this.delta += Math.PI * 2;

          if (this.delta > 0) {
            // Turn clockwise
              this.sprite.angle += this.configs.TURN_RATE;
          } else {
              // Turn counter-clockwise
              this.sprite.angle -= this.configs.TURN_RATE;
          }

            // Just set angle to target angle if they are close
          if (Math.abs(this.delta) < Nakama.game.math.degToRad(this.configs.TURN_RATE)) {
              this.sprite.rotation = this.targetAngle;
          }
      }

          // Calculate velocity vector based on this.rotation and this.SPEED
          this.sprite.body.velocity.x = Math.cos(this.sprite.rotation-Math.PI/2) * this.configs.MISSILE_SPEED;
          this.sprite.body.velocity.y = Math.sin(this.sprite.rotation-Math.PI/2) * this.configs.MISSILE_SPEED;
    }
    else {
      this.sprite.body.velocity.y = -this.configs.MISSILE_SPEED;
    }
  }
}
