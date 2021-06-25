import { useState } from "react";
import { Board, MoveCounter } from "./components";
import { GameContext } from "./contexts";
import { Game } from "./game";
import "./App.css";

const App = () => {
  // state hooks
  const [game, setGame] = useState<Game>(new Game());

  return (
    <GameContext.Provider value={{ game, setGame }}>
      <main id="app">
        <Board />
        <MoveCounter />
      </main>
    </GameContext.Provider>
  );
};

export default App;
