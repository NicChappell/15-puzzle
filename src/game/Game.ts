import { EventEmitter } from "events";
import Tile from "./Tile";

class Game extends EventEmitter {
  constructor() {
    super();
    this.board = [];
    this.moves = 0;
    this.openSpace = { x: 3, y: 3 };
    this.timer = 0;
  }

  board: any;
  moves: number;
  openSpace: {
    x: number;
    y: number;
  };
  timer: number;

  eventTest = () => {
    this.emit("event");
  };

  newGame = () => {
    this.board = "mrah";
    this.moves = 123123123;
    this.timer = 42432342;
  };

  move = (tile: Tile) => {
    // destructure tile
    const { x: tileX, y: tileY } = tile;

    // destructure open space
    const { x: openSpaceX, y: openSpaceY } = this.openSpace;

    // compare x axis
    if (tileX === openSpaceX) {
        // logic to move in open direction
    }

    // compare y axis
    if (tileY === openSpaceY) {
        // logic to move in open direction
    }
  };
}

export default Game;
