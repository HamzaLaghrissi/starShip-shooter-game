import imgSrc from '../assets/images/flyingSaucer-petit.png';
import Mobile from './mobile.js';
import game from './game.js';


export default class Saucer extends Mobile{

  static SAUCER_HEIGHT = 36;

  constructor(x, y){
    super(x , y, imgSrc, -3, 0);
  }

  move(){
    if(this.y+this.image.height> game.canvas.height)
      game.saucers.splice(game.saucers.indexOf(this) ,1);
    if(this.x<0 - this.image.width){
      game.saucers.splice(game.saucers.indexOf(this),1);
      game.modifieScore(-1000);
    }
    else {
      this.x += this.deltaX;
      this.y += this.deltaY;
    }
  }
}
