import { useEffect, useState } from "react";
import "./GameBoard.css";

const GameBoard = () => {
  // state hooks
  const [mrah, setMrah] = useState("");

  // effect hooks
  useEffect(() => {
    setMrah("mrah");
  }, []);

  return (
    <div className="game-board">
      <p>Game Board</p>
    </div>
  );
};

export default GameBoard;
