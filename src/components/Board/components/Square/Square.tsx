import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../../../contexts";
import { Tile } from "../../../../game";
import "./Square.css";

export interface ISquare {
  tile: Tile;
}

const Square = ({ tile }: ISquare) => {
  // destructure tile
  const { value: tileValue, x: tileX, y: tileY } = tile;

  // context hooks
  const { game, setGame } = useContext(GameContext);

  // state hooks
  const [left, setLeft] = useState<string>();
  const [top, setTop] = useState<string>();

  // effect hooks
  useEffect(() => {
    // set left property
    switch (tileX) {
      case 0:
        setLeft("0%");
        break;
      case 1:
        setLeft("25%");
        break;
      case 2:
        setLeft("50%");
        break;
      case 3:
        setLeft("75%");
        break;
    }

    // set top property
    switch (tileY) {
      case 0:
        setTop("0%");
        break;
      case 1:
        setTop("25%");
        break;
      case 2:
        setTop("50%");
        break;
      case 3:
        setTop("75%");
        break;
    }
  }, []);

  const handleClick = () => {
    game.move(tile);

    console.log(game.board);
    setGame(game);
  };

  return (
    <div className="square" onClick={handleClick} style={{ left, top }}>
      <span className="value">{tileValue}</span>
    </div>
  );
};

export default Square;
