import React, { useEffect, useCallback, useRef } from "react";
import { useGameState, useTextState } from "hooks";
import { HandleClick, HandleKeyDown, TextFieldRef } from "./types";
import "./style.css";

export function TextField() {

  const { gameStarted, toggleGame } = useGameState();
  const { typedWord, textArray, setTypedWord, removeWord } = useTextState();
  const textField: TextFieldRef = useRef(null);
  useEffect(textFieldFocus, [gameStarted]);

  function textFieldFocus() {
    if (gameStarted) {
      (textField.current as HTMLInputElement).select();
    }
    else {
      (textField.current as HTMLInputElement).blur();
    }
  }

  const handleClick: HandleClick = useCallback((event) => { !gameStarted && event.preventDefault() }, [gameStarted]);

  const handleKeyDown: HandleKeyDown = useCallback((event) => {
    if (event.key === " ") {
      if (textArray[0] === typedWord.toLowerCase()) {
        setTypedWord("");
        removeWord();
        if (textArray.length === 1) {
          toggleGame();
        }
        event.preventDefault();
      }
    }
  }, [typedWord]);

  return <input
    type="text"
    className="textField"
    tabIndex={gameStarted ? 0 : -1}
    ref={textField}
    value={typedWord}
    onChange={event => { setTypedWord(event.target.value) }}
    onMouseDown={handleClick}
    onKeyDown={handleKeyDown}
  />;
}