import { useEffect, useState } from "react";
import { Board, MoveCounter, Timer } from "./components";
import { Game } from "./game";
import "./App.css";

const App = () => {
  // state hooks
  const [game, setGame] = useState<Game>();
  console.log("game: ", game);
  console.log("game.board: ", game?.board);
  game?.reset();
  console.log("game.board: ", game?.board);

  // effect hooks
  useEffect(() => {
    // instantiate new Game
    const game = new Game();

    // generate new board
    game.newBoard();

    // update state
    setGame(game);

    game.on("event", () => {
      console.log("triggered!");
    });
    game.eventTest();
  }, []);

  return (
    <main id="app">
      <Board board={game?.board} />
      <MoveCounter />
      <Timer />
    </main>
  );
};

export default App;
