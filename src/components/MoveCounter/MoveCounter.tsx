import { useEffect, useState } from "react";
import "./MoveCounter.css";

const MoveCounter = () => {
  // state hooks
  const [moveCount, setMoveCount] = useState(0);
  console.log("moveCount: ", moveCount);

  // effect hooks
  useEffect(() => {
    setMoveCount(999999);
  }, []);

  return (
    <div className="move-counter">
      <p>Move Counter: {0}</p>
    </div>
  );
};

export default MoveCounter;
