import { useEffect, useState } from "react";
import "./Tile.css";

export interface ITile {
  value: number;
  x: number;
  y: number;
}

const Tile = ({ value, x, y }: ITile) => {
  console.log("value: ", value);
  console.log("x: ", x);
  console.log("y: ", y);

  // set left property
  let left = "";
  switch (x) {
    case 0:
      left = "0%";
      break;
    case 1:
      left = "25%";
      break;
    case 2:
      left = "50%";
      break;
    case 3:
      left = "75%";
      break;
  }

  // set top property
  let top = "";
  switch (y) {
    case 0:
      top = "0%";
      break;
    case 1:
      top = "25%";
      break;
    case 2:
      top = "50%";
      break;
    case 3:
      top = "75%";
      break;
  }

  // state hooks
  const [mrah, setMrah] = useState("");

  // effect hooks
  useEffect(() => {
    setMrah("mrah");
  }, []);

  const handleClick = () => {
    console.log("mrah");
  };

  return (
    <div className="tile" onClick={handleClick} style={{ left, top }}>
      <span>{value}</span>
    </div>
  );
};

export default Tile;
