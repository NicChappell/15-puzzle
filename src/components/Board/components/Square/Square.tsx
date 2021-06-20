import { Tile } from "../../../../game";
import "./Square.css";

export interface ISquare {
  tile: Tile;
}

const Square = ({ tile }: ISquare) => {
  // destructure tile
  const { value, x, y } = tile;

  console.log("value: ", value);
  console.log("x: ", x);
  console.log("y: ", y);

  // set left property
  let left = "";
  switch (x) {
    case 1:
      left = "0%";
      break;
    case 2:
      left = "25%";
      break;
    case 3:
      left = "50%";
      break;
    case 4:
      left = "75%";
      break;
  }

  // set top property
  let top = "";
  switch (y) {
    case 1:
      top = "0%";
      break;
    case 2:
      top = "25%";
      break;
    case 3:
      top = "50%";
      break;
    case 4:
      top = "75%";
      break;
  }

  const handleClick = () => console.log(value);

  return (
    <div className="square" onClick={handleClick} style={{ left, top }}>
      <span className="value">{value}</span>
    </div>
  );
};

export default Square;
