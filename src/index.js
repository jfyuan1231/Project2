import './styles/game.css';
import Game from './partials/Game';
import {BOARD_WIDTH, BOARD_HEIGHT} from './settings';

const game = new Game('game', BOARD_WIDTH, BOARD_HEIGHT);

(function gameLoop() {
  game.render();
  requestAnimationFrame(gameLoop);
})();
