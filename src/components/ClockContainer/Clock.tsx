import React, { useState, useEffect, useRef } from "react";
import { useGameState, useTimeState } from "hooks";
import { ToggleClock } from "./types";
import "./style.css";

export function Clock() {

  let timeElapsedId: NodeJS.Timer;
  const { gameStarted, toggleGame } = useGameState();
  const { timeElapsed, updateClock, timeSpanToClock } = useTimeState();
  const [disable, setDisable] = useState(false);
  useEffect(toggleClock, [gameStarted]);
  const hasInitialized = useRef(false);

  function toggleClock(): ToggleClock {
    if (hasInitialized.current) {
      if (gameStarted) {
        timeElapsedId = setInterval(() => { updateClock() }, 47);
        setDisable(true);
        return () => { clearInterval(timeElapsedId) };
      }
      else {
        setDisable(false);
      }
    }
    else {
      hasInitialized.current = true;
    }
  }

  return (
    <button className="clock" onClick={toggleGame} disabled={disable}>
      {timeSpanToClock(timeElapsed)}
    </button>
  );
}