import { useEffect, useState } from "react";
import "./Tile.css";

export interface ITile {
  tile: any;
}

const Tile = ({ tile }: ITile) => {
  console.log("tile: ", tile);

  let style;
  switch (tile) {
    case 0:
      style = { left: "0%", top: "0%" };
      break;
    case 1:
      style = { left: "25%", top: "0%" };
      break;
    case 2:
      style = { left: "50%", top: "0%" };
      break;
    case 3:
      style = { left: "75%", top: "0%" };
      break;
    case 4:
      style = { left: "0%", top: "25%" };
      break;
    case 5:
      style = { left: "25%", top: "25%" };
      break;
    case 6:
      style = { left: "50%", top: "25%" };
      break;
    case 7:
      style = { left: "75%", top: "25%" };
      break;
    case 8:
      style = { left: "0%", top: "50%" };
      break;
    case 9:
      style = { left: "25%", top: "50%" };
      break;
    case 10:
      style = { left: "50%", top: "50%" };
      break;
    case 11:
      style = { left: "75%", top: "50%" };
      break;
    case 12:
      style = { left: "0%", top: "75%" };
      break;
    case 13:
      style = { left: "25%", top: "75%" };
      break;
    case 14:
      style = { left: "50%", top: "75%" };
      break;
    case 15:
      style = { left: "75%", top: "75%" };
      break;
    default:
      // i dunno
      break;
  }
  // state hooks
  const [mrah, setMrah] = useState("");

  // effect hooks
  useEffect(() => {
    setMrah("mrah");
  }, []);

  return (
    <div className="tile" onClick={() => console.log("mrah")} style={style}>
      <p>Tile</p>
    </div>
  );
};

export default Tile;
