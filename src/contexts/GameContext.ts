import { createContext } from "react";
import { Game } from "../game";

const GameContext = createContext<Game | undefined>(undefined);

export default GameContext;
