class ShipType3Controller extends ShipController{
  constructor(x, y, spriteSuffix, configs){
    super(
      x,
      y,
      `Spaceship3${spriteSuffix}.png`,
      configs
    );

    this.configs.SHIP_SPEED = 700;
    this.configs.BULLET_TIME = 1000;
  }

  fire(){
    new BulletType3Controller(
      this.sprite.x,
      this.sprite.y,
      {
        shooter : this,
        direction : 'left'
      }
    );
    new BulletType3Controller(
      this.sprite.x,
      this.sprite.y,
      {
        shooter : this,
        direction : 'right'
      }
    );
  }
}
