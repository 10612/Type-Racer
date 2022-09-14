import { useContext } from "react";
import { store, useTimeState, useTextState } from "hooks"
import { GameState } from "./types";

export function useGameState() {
  const { gameStarted, setGameStarted } = useContext(store);
  const { startTimer, updateClock } = useTimeState();
  const { supersedeArray } = useTextState();

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

  return { gameStarted, toggleGame } as GameState;
}