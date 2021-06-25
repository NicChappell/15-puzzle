import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../contexts";
import "./MoveCounter.css";

const MoveCounter = () => {
  // context hooks
  const { game } = useContext(GameContext);

  // state hooks
  const [moves, setMoves] = useState(game.moves);

  // effect hooks
  useEffect(() => {
    setMoves(game.moves);
  }, [game.moves]);

  return (
    <div className="move-counter">
      <p>Move Counter: {moves}</p>
    </div>
  );
};

export default MoveCounter;
