import React, { useState, useEffect, useRef } from "react";
import useGameState from "../../hooks/GameState";
import useTimeState from "../../hooks/TimeState";
import { timeSpanToClock } from "../../utils";
import { GameState, TimeState } from "../../types";
import { ToggleClock } from "./types";
import "./style.css";

function Clock() {

  let timeElapsedId: NodeJS.Timer;
  const { gameStarted, toggleGame }: GameState = useGameState();
  const { timeElapsed, updateClock }: TimeState = useTimeState();
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

export default Clock;