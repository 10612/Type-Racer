import React, { useEffect, useRef } from "react";

interface Props {
  timeElapsed: number;
  gameStarted: boolean;
  startGame: (event: React.MouseEvent<HTMLButtonElement>) => void;
  clockRef: React.MutableRefObject<HTMLButtonElement | null>;
  milliToClock: (timeSpan: number) => string;
  updateClock: () => void;
}

function Clock({timeElapsed, gameStarted, startGame, clockRef, milliToClock, updateClock}: Props) {

  let timeElapsedId: NodeJS.Timer;
  useEffect(toggleClock, [gameStarted]);
  const hasInitialized = useRef(false);

  function toggleClock(): (() => void) | void {
    if(hasInitialized.current) {
      if(gameStarted) {
      timeElapsedId = setInterval(updateClock, 100);
      return () => { clearInterval(timeElapsedId) };
      }
    }
    else {
      hasInitialized.current = true;
    }
  }

  return (
    <button id="clock" ref={clockRef} onClick={startGame}>
      {milliToClock(timeElapsed)}
    </button>
  );
}

export default Clock;