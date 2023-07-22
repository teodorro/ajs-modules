import './domain';

export default class Game {
  start() {
    console.log(this);
    console.log('game started');
  }
}

export class GameSavingData {
}

export function readGameSaving() {
}

export function writeGameSaving() {
}
