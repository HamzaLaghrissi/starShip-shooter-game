import Mobile from './mobile.js';
import imgSrc from '../assets/images/tir.png';
import game from './game.js';

export default class Shoot extends Mobile{
  constructor(x, y){
      super(x, y, imgSrc, 8, 0);
  }

  collisionWith(mobile){
    let p1x, p1y, p2x, p2y;
    p1x = Math.max(this.x, mobile.x);
    p1y = Math.max(this.y, mobile.y);
    p2x = Math.min(this.x+this.image.width, mobile.x+mobile.image.width);
    p2y = Math.min(this.y+this.image.height, mobile.y+mobile.image.height);
    if(p1x<=p2x && p1y<=p2y && mobile.deltaX!==0)
      return true;
    else
      return false;
  }

  saucerInCollision(saucers){
    saucers.forEach(s => {
      if(this.collisionWith(s)){
        game.shots.splice(game.shots.indexOf(this),1);
        game.modifieScore(200);
        s.deltaX = 0;
        s.deltaY = 3;
      }
    });

  }

}
