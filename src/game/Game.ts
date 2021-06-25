import Tile from "./Tile";
import { shuffle } from "./helpers";

class Game {
  constructor() {
    this.board = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    this.moves = 0;
    this.openSpace = { x: 3, y: 3 };
    this.values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  }

  board: any[][];
  moves: number;
  openSpace: {
    x: number;
    y: number;
  };
  values: number[];

  move = (tile: Tile) => {
    // destructure tile
    const { x: tileX, y: tileY } = tile;

    // destructure open space
    const { x: openX, y: openY } = this.openSpace;

    // check for open horizontal vector
    if (openX === tileX) {
      // calculate diff
      const diffY = openY - tileY;
      console.log("diffY: ", diffY);

      let tile1: Tile, tile2: Tile, tile3: Tile;
      switch (diffY) {
        case -3:
          tile1 = this.board[tileX][tileY];
          tile2 = this.board[tileX][tileY - 1];
          tile3 = this.board[tileX][tileY - 2];

          this.board[tileX][tileY] = 0;
          this.board[tileX][tileY - 1] = tile1;
          this.board[tileX][tileY - 2] = tile2;
          this.board[tileX][tileY - 3] = tile3;
          break;
        case -2:
          tile1 = this.board[tileX][tileY];
          tile2 = this.board[tileX][tileY - 1];

          this.board[tileX][tileY] = 0;
          this.board[tileX][tileY - 1] = tile1;
          this.board[tileX][tileY - 2] = tile2;
          break;
        case -1:
          tile1 = this.board[tileX][tileY];

          this.board[tileX][tileY] = 0;
          this.board[tileX][tileY - 1] = tile1;
          break;
        case 1:
          tile1 = this.board[tileX][tileY];

          this.board[tileX][tileY] = 0;
          this.board[tileX][tileY + 1] = tile1;
          break;
        case 2:
          tile1 = this.board[tileX][tileY];
          tile2 = this.board[tileX][tileY + 1];

          this.board[tileX][tileY] = 0;
          this.board[tileX][tileY + 1] = tile1;
          this.board[tileX][tileY + 2] = tile2;
          break;
        case 3:
          tile1 = this.board[tileX][tileY];
          tile2 = this.board[tileX][tileY + 1];
          tile3 = this.board[tileX][tileY + 2];

          this.board[tileX][tileY] = 0;
          this.board[tileX][tileY + 1] = tile1;
          this.board[tileX][tileY + 2] = tile2;
          this.board[tileX][tileY + 3] = tile3;
          break;
      }
    }

    // check for open vertical vector
    if (openY === tileY) {
      // calculate diff
      const diffX = openX - tileX;
      console.log("diffX: ", diffX);
    }

    this.moves = 1111;
  };

  newGame = () => {
    this.values = shuffle(this.values);

    let counter = 0;
    const tiles: Tile[] = [];

    this.board.forEach((row, index) => {
      const x = index;

      row.forEach((column, index) => {
        const y = index;

        // return early before final element
        if (x === 3 && y === 3) return;

        const value = this.values[counter];

        const tile = new Tile(value, x, y);

        this.board[x][y] = tile;

        tiles.push(tile);

        counter++;
      });
    });

    console.log(this.board);

    return tiles;
  };
}

export default Game;
