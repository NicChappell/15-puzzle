import { useEffect, useState } from "react";
import "./Tile.css";

const Tile = () => {
  // state hooks
  const [mrah, setMrah] = useState("");

  // effect hooks
  useEffect(() => {
    setMrah("mrah");
  }, []);

  return (
    <div className="tile">
      <p>Tile</p>
    </div>
  );
};

export default Tile;
