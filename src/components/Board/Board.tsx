import { Square } from "./components";
import { Tile } from "../../game";
import "./Board.css";

export interface IBoard {
  tiles: Tile[];
}

const Board = ({ tiles }: IBoard) => {
  return (
    <div className="board">
      {tiles.map((tile, index) => (
        <Square key={index} tile={tile} />
      ))}
    </div>
  );
};

export default Board;
