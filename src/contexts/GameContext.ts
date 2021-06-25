import { createContext, Dispatch, SetStateAction } from "react";
import { Game } from "../game";

interface IGameContext {
  game: Game;
  setGame: Dispatch<SetStateAction<Game>>;
}

const GameContext = createContext<IGameContext>({
  game: undefined!,
  setGame: () => {},
});

export default GameContext;
