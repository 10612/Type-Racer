import { useState } from "react";

export default function useGameState() {
  const [gameStarted, setStarted] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [typedWord, setTypedWord] = useState("");
  const [textArray, setTextArray] = useState(["The game will start once you start the clock."] as string[]);
  return {
    startTime, gameStarted, timeElapsed, typedWord, textArray,
    setStarted, setStartTime, setTimeElapsed, setTypedWord, setTextArray
  };
}