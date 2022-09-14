import { useContext } from "react";
import { store } from "hooks";
import { TimeSpanToClock, TimeState } from "./types";

export function useTimeState() {
  const { startTime, setStartTime, timeElapsed, setTimeElapsed } = useContext(store);

  function startTimer() {
    setStartTime(Date.now());
  }

  function updateClock() {
    setTimeElapsed(Date.now() - startTime);
  }

  const timeSpanToClock: TimeSpanToClock = timeSpan => {
    return ("0" + Math.trunc(timeSpan / 60000)).slice(-2) + ":" +
      ("0" + Math.trunc(timeSpan / 1000) % 60).slice(-2) + "." +
      ("00" + Math.trunc(timeSpan % 1000)).slice(-3)
  }

  return { startTime, timeElapsed, startTimer, updateClock, timeSpanToClock } as TimeState;
}