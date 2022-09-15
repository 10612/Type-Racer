import React, { useState, useMemo, createContext } from "react";
import { Global } from "./types";

export const store = createContext({} as Global);

export function GlobalState({ children }: { children: React.ReactFragment }) {
  const [gameStarted, setGameStarted] = useState(false);
  const [typedWord, setTypedWord] = useState("");
  const [textArray, setTextArray] = useState([] as string[]);
  const [startTime, setStartTime] = useState(Date.now());
  const [timeElapsed, setTimeElapsed] = useState(0);
  const globals = useMemo(() => {
    return {
      gameStarted, setGameStarted,
      typedWord, setTypedWord,
      textArray, setTextArray,
      startTime, setStartTime,
      timeElapsed, setTimeElapsed
    } as Global
  }, [gameStarted, setGameStarted,
    typedWord, setTypedWord,
    textArray, setTextArray,
    startTime, setStartTime,
    timeElapsed, setTimeElapsed]);

  return (
    <store.Provider value={globals}>
      {children}
    </store.Provider>
  );
}