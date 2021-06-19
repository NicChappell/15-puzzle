import { Tile } from "../Tile";
import "./Row.css";

export interface IRow {
  row: Array<number>;
  x: number;
}

const Row = ({ row, x }: IRow) => {
  return (
    <div className="row">
      {row.map((column, index) => {
        return <Tile value={column} x={x} y={index}></Tile>;
      })}
    </div>
  );
};

export default Row;
