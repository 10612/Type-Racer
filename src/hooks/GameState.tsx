import { useContext } from "react";
import { store } from "./GlobalState";
import useTimeState from "./TimeState";
import useTextState from "./TextState";
import { TextState, TimeState } from "../types";

export default function useGameState() {
  const { gameStarted, setGameStarted } = useContext(store);
  const { startTimer, updateClock }: TimeState = useTimeState();
  const { supersedeArray }: TextState = useTextState();

  function toggleGame() {
    if (gameStarted) {
      updateClock();
      setGameStarted(false);
    }
    else {
      setGameStarted(true);
      supersedeArray();
      startTimer();
    }
  }

  return { gameStarted, toggleGame };
}