import { useEffect, useState } from "react";
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

  // state hooks
  const [left, setLeft] = useState<string>();
  const [top, setTop] = useState<string>();

  // effect hooks
  useEffect(() => {
    // set left property
    switch (x) {
      case 1:
        setLeft("0%");
        break;
      case 2:
        setLeft("25%");
        break;
      case 3:
        setLeft("50%");
        break;
      case 4:
        setLeft("75%");
        break;
    }

    // set top property
    switch (y) {
      case 1:
        setTop("0%");
        break;
      case 2:
        setTop("25%");
        break;
      case 3:
        setTop("50%");
        break;
      case 4:
        setTop("75%");
        break;
    }
  }, []);

  const handleClick = () => {
    console.log(tile);

    setLeft("75%");
    setTop("75%");
  };

  return (
    <div className="square" onClick={handleClick} style={{ left, top }}>
      <span className="value">{value}</span>
    </div>
  );
};

export default Square;
