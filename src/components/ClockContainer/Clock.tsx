import React, { useEffect, useRef } from "react";
import { timeSpanToClock, updateClock } from "../../utils";
import Props from "./types";
import "./style.css";

function Clock({ gameState, startGame, clockRef }: Props) {

  let timeElapsedId: NodeJS.Timer;
  useEffect(toggleClock, [gameState.gameStarted]);
  const hasInitialized = useRef(false);

  function toggleClock(): (() => void) | void {
    if (hasInitialized.current) {
      if (gameState.gameStarted) {
        timeElapsedId = setInterval(() => { updateClock(gameState) }, 47);
        return () => { clearInterval(timeElapsedId) };
      }
    }
    else {
      hasInitialized.current = true;
    }
  }

  return (
    <button id="clock" ref={clockRef} onClick={startGame}>
      {timeSpanToClock(gameState.timeElapsed)}
    </button>
  );
}

export default Clock;