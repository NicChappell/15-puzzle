import { useEffect, useState } from "react";
import { Tile } from "./components";
import "./Board.css";

const Board = () => {
  // state hooks
  const [mrah, setMrah] = useState("");

  // effect hooks
  useEffect(() => {
    setMrah("mrah");
  }, []);

  return (
    <div className="board">
      <Tile />
    </div>
  );
};

export default Board;
