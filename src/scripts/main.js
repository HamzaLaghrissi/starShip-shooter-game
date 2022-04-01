
// importation de la classe Game.js
//import Game from './game.js';
import game from './game.js'


// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler le starship
const init = () => {

  game.animate();
  window.addEventListener('keydown', game.keyDownActionHandler.bind(game));
  window.addEventListener('keyup', game.keyUpActionHandler.bind(game));
  document.getElementById("nouvelleSoucoupe").addEventListener("click", () => game.addNewSaucer());
  document.getElementById("flotteSoucoupes").addEventListener("click", () => game.randomSaucers());
}

window.addEventListener("load",init);


//
console.log('le bundle a été généré');
