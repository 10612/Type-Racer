import { useContext } from "react";
import { store } from "./GlobalState";

function useTimeState() {
  const { startTime, setStartTime, timeElapsed, setTimeElapsed } = useContext(store);

  function startTimer() {
    setStartTime(Date.now());
  }

  function updateClock() {
    setTimeElapsed(Date.now() - startTime);
  }

  return { startTime, timeElapsed, startTimer, updateClock };
}

export default useTimeState;