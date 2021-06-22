import Tile from "./Tile";
import { shuffle } from "./helpers";

class Game {
  constructor() {
    this.board = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    this.moves = 0;
    this.openSpace = { x: 4, y: 4 };
    this.timer = 0;
    this.values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  }

  board: number[][];
  moves: number;
  openSpace: {
    x: number;
    y: number;
  };
  timer: number;
  values: number[];

  newGame = () => {
    this.values = shuffle(this.values);

    let counter = 0;
    const tiles: Tile[] = [];

    this.board.forEach((row, index) => {
      const x = index + 1;

      row.forEach((column, index) => {
        const y = index + 1;

        // return early before final element
        if (x === 4 && y === 4) return;

        const value = this.values[counter];

        const tile = new Tile(value, x, y);

        tiles.push(tile);

        counter++;
      });
    });

    return tiles;
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
