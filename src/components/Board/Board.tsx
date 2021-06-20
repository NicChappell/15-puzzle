import { useEffect, useState } from "react";
import { Tile } from "./components";
import "./Board.css";

export interface IBoard {
  board: any;
}

const Board = ({ board }: IBoard) => {
  // state hooks
  const [mrah, setMrah] = useState("");

  // effect hooks
  useEffect(() => {
    setMrah("mrah");
  }, []);

  // flatten game board
  const tiles = [].concat.apply([], board);
  console.log("tiles: ", tiles);

  return (
    <div className="board">
      {tiles.map((tile, index) => (
        <Tile key={index} tile={tile} />
      ))}
    </div>
  );
};

export default Board;
