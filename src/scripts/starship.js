import MoveState from './movestate.js';
import Mobile from './mobile.js';
import imgSrc from '../assets/images/vaisseau-ballon-petit.png';
import game from './game.js'

export default class Starship extends Mobile{

  constructor(canvas){
    super( 40, canvas.height/2, imgSrc, 0, 8);
    this.moving;
  }

  get up(){
    if (this.moving === MoveState.UP)
      return true;
    return false;
  }

  get down(){
    if (this.moving === MoveState.DOWN)
      return true;
    return false;
  }

  moveUp() {
    this.shiftY = - 10;
    this.moving = MoveState.UP;
  }

  moveDown() {
    this.shiftY = + 10;
    this.moving = MoveState.DOWN;
  }

  move (){
    if (this.moving === MoveState.UP)
      this.y = Math.max(0,this.y + this.shiftY);
    if (this.moving === MoveState.DOWN)
      this.y = Math.min(game.canvas.height - this.image.height, this.y + this.shiftY);
  }

  stopMoving() {
      this.moving = MoveState.NONE;
  }

}
