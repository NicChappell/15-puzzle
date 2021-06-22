import { useEffect, useState } from "react";
import { Board, MoveCounter, Timer } from "./components";
import { GameContext } from "./contexts";
import { Game, Tile } from "./game";
import "./App.css";

const App = () => {
  // state hooks
  const [game, setGame] = useState<Game>();
  console.log("game: ", game);
  const [tiles, setTiles] = useState<Tile[]>([]);
  console.log("tiles: ", tiles);

  // effect hooks
  useEffect(() => {
    // instantiate new Game object
    const game = new Game();

    // update state
    setGame(game);
  }, []);

  useEffect(() => {
    if (game) {
      // generate new tiles
      const tiles = game.newGame();

      // update state
      setTiles(tiles);
    }
  }, [game]);

  return (
    <GameContext.Provider value={game}>
      <main id="app">
        <Board tiles={tiles} />
        <MoveCounter />
        <Timer />
      </main>
    </GameContext.Provider>
  );
};

export default App;
