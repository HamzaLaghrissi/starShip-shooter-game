import StarShip from './starship.js';
import Saucer from './saucer.js';
import Shoot from './shoot.js';


export class Game {

  constructor(canvas){
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.ship = new StarShip(canvas);
    this.saucers = [];
    this.score = 0;
    this.shots = [];
    this.timerId = null;
    this.animate = this.animate.bind(this);
  }

  animate(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ship.draw(this.context);
    this.ship.move();
    this.saucers.forEach(s => {
      s.draw(this.context);
      s.move();
    });
    this.shots.forEach(s => {
      s.draw(this.context);
      s.move();
      s.saucerInCollision(this.saucers);
    });
    window.requestAnimationFrame(this.animate);
  }

  keyDownActionHandler(event) {
     switch (event.key) {
       case "ArrowUp":
       case "Up":
          this.ship.moveUp();
          break;
       case "ArrowDown":
       case "Down":
          this.ship.moveDown();
          break;
       case " ":
          this.shots.push(new Shoot(this.ship.x+this.ship.image.width, this.ship.y+this.ship.image.height/2));
          document.activeElement.blur();
          break;
         default: return;
     }
     event.preventDefault();
  }

  keyUpActionHandler(event) {
    switch (event.key) {
        case "ArrowLeft":
        case "Left":
        case "ArrowRight":
        case "Right":
        case "ArrowUp":
        case "Up":
        case "ArrowDown":
        case "Down":
            this.ship.stopMoving();
            break;
        case " ":
            break;
        default: return;
    }
    event.preventDefault();
  }

  alea(n){
    return Math.floor(Math.random() * n);
  }

  addNewSaucer(){
    this.saucers.push(new Saucer(this.canvas.width, this.alea(this.canvas.height-Saucer.SAUCER_HEIGHT)));
  }

  modifieScore(n){
    this.score += n;
    document.getElementById("score").innerHTML = this.score;
  }

  randomSaucers(){
    if(this.timerId === null){
      this.timerId = setInterval(() => {
        if (this.alea(2))
          this.addNewSaucer();
      }
      , 750);
    }
    else{
      clearInterval(this.timerId);
      this.timerId=null;
    }
  }

}

export default new Game(document.getElementById("stars"));
