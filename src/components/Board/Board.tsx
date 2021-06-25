import { useContext, useEffect, useState } from "react";
import { Tile } from "../../game";
import { GameContext } from "../../contexts";
import { Square } from "./components";
import "./Board.css";

const Board = () => {
  // state hooks
  const [tiles, setTiles] = useState<Tile[]>([]);

  // context hooks
  const { game } = useContext(GameContext);

  // effect hooks
  useEffect(() => {
    // generate new tiles
    const tiles = game.newGame();

    // update state
    setTiles(tiles);
  }, []);

  return (
    <div className="board">
      {tiles.map((tile, index) => (
        <Square key={index} tile={tile} />
      ))}
    </div>
  );
};

export default Board;
