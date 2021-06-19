import { Row } from "./components";
import "./Board.css";

export interface IBoard {
  board: any;
}

const Board = ({ board }: IBoard) => {
  return (
    <div className="board">
      {board &&
        board.map((row: Array<any>, index: number) => (
          <Row key={index} row={row} x={index} />
        ))}
    </div>
  );
};

export default Board;
