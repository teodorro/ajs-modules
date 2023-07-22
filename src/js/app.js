
import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game';


const game = new Game();
game.start();
const gsd = new GameSavingData();
console.log(gsd);
loadGame();
saveGame();
