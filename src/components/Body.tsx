import React, { useState, useRef } from "react";
import Clock from "./Clock";
import Words from "./Words";
import TextField from "./TextField";
import Leaderboard from "./Leaderboard";

const dictionary: string[] = (await(fetch("https://gist.githubusercontent.com/deekayen/4148741/raw/98d35708fa344717d8eee15d11987de6c8e26d7d/1-1000.txt")
  .then(response => response.text(), () => alert("Page failed to load"))) as string).split("\n");
const dictionaryLength: number = dictionary.length;

function Body() {
  
  const [startTime, setStartTime] = useState(Date.now());
  const [gameStarted, setStarted] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [typedWord, setTypedWord] = useState("");
  const [textArray, setTextArray] = useState(["The game will start once you start the clock."] as string[]);
  const [tabable, setTabable] = useState(-1);
  const textField: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const clock: React.MutableRefObject<HTMLButtonElement | null> = useRef(null);

  function startGame(event: React.MouseEvent<HTMLButtonElement>): void {
    const button = event.target as HTMLButtonElement;
    button.disabled = true;
    setStartTime(Date.now());
    setStarted(true);
    setTextArray(buildTextArray());
    (textField.current as HTMLInputElement).select();
    setTabable(0);
  }

  function buildTextArray(): string[] {
    let textArray: string[] = [];
    let nextWord: string;
    let approxLetterCount: number = 200;
    let randomWordIndex: number;
    while(approxLetterCount > 0) {
      randomWordIndex = Math.round(Math.random() * (dictionaryLength - 1));
      nextWord = dictionary[randomWordIndex].toLowerCase();
      textArray.push(nextWord);
      approxLetterCount -= nextWord.length;
    }
    return textArray;
  }

  function timeSpanToClock(timeSpan: number): string {
    return ("0" + Math.trunc(timeSpan / 60000)).slice(-2) + ":" +
    ("0" + Math.trunc(timeSpan / 1000) % 60).slice(-2) + "." +
    ("00" + Math.trunc(timeSpan % 1000)).slice(-3);
  }

  function updateClock(): void {
    setTimeElapsed(Date.now() - startTime);
}

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void {
    if(event.key === " ") {
      if(textArray[0] === typedWord.toLowerCase()) {
        setTypedWord("");
        setTextArray(textArray.slice(1));
        if(textArray.length === 1) {
          endGame();
        }
        event.preventDefault();
      }
    }
  }

  function endGame(): void {
    updateClock()
    setStarted(false);
    (textField.current as HTMLInputElement).blur();
    setTabable(0);
    setTextArray(["The game will start once you start the clock."]);
    (clock.current as HTMLButtonElement).disabled = false;
  }

  return (
    <div onKeyDown={handleKeyDown}>
      <Clock
        timeElapsed={timeElapsed}
        gameStarted={gameStarted}
        startGame={startGame}
        clockRef={clock}
        milliToClock={timeSpanToClock}
        updateClock={updateClock}
      />
      <div id="textContainer">
        <Words textArray={textArray} />
        <TextField 
          typedWord={typedWord}
          setTypedWord={setTypedWord}
          tabable={tabable}
          textFieldRef={textField}
          gameStarted={gameStarted}
        />
        
      </div>
      <Leaderboard
        newTime={timeElapsed}
        gameEnded={!gameStarted}
        timeSpanToClock={timeSpanToClock}
      />
    </div>
  );
}

export default Body;