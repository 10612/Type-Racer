import React, { useRef, useCallback } from "react";
import buildTextArray from "./utils";
import { updateClock } from "../../utils";
import useGameState from "../../hooks/GameState";
import GameState, { Ref, Click, Input, Button } from "../../types";
import KeyPress from "./types";
import Clock from "../ClockContainer/Clock";
import WordsToType from "../WordsToTypeContainer/WordsToType";
import TextField from "../TextFieldContainer/TextField";
import Leaderboard from "../LeadeboardContainer/Leaderboard";
import "./style.css";

function Body() {

  const gameState: GameState = useGameState();
  const textField: Ref<Input | null> = useRef(null);
  const clock: Ref<Button | null> = useRef(null);
  let tabable: Ref<number> = useRef(-1);
  const startGame = useCallback((event: Click<Button>) => {
    const button = event.target as Button;
    button.disabled = true;
    gameState.setStartTime(Date.now());
    gameState.setStarted(true);
    gameState.setTextArray(buildTextArray());
    (textField.current as Input).select();
    tabable.current = 0;
  },
    [gameState.setStartTime, gameState.setStarted, gameState.setTextArray, tabable.current]
  );

  function handleKeyDown(event: KeyPress<Input>): void {
    if (event.key === " ") {
      if (gameState.textArray[0] === gameState.typedWord.toLowerCase()) {
        gameState.setTypedWord("");
        gameState.setTextArray(gameState.textArray.slice(1));
        if (gameState.textArray.length === 1) {
          endGame();
        }
        event.preventDefault();
      }
    }
  }

  function endGame(): void {
    updateClock(gameState);
    gameState.setStarted(false);
    (textField.current as Input).blur();
    tabable.current = 0;
    gameState.setTextArray(["The game will start once you start the clock."]);
    (clock.current as Button).disabled = false;
  }

  return (
    <div onKeyDown={handleKeyDown}>
      <Clock
        gameState={gameState}
        startGame={startGame}
        clockRef={clock}
      />
      <div id="textContainer">
        <WordsToType gameState={gameState} />
        <TextField
          gameState={gameState}
          tabable={tabable.current}
          textFieldRef={textField}
        />
      </div>
      <Leaderboard
        gameState={gameState}
      />
    </div>
  );
}

export default Body;