import React from "react";
import Props from "./types";
import { Click, Input } from "../../types";
import "./style.css";

function TextField({ gameState, tabable, textFieldRef }: Props) {

  function handleClick(event: Click<Input>) {
    if (!gameState.gameStarted) {
      event.preventDefault();
    }
  }

  return <input
    type="text"
    id="textField"
    tabIndex={tabable}
    ref={textFieldRef}
    value={gameState.typedWord}
    onChange={event => { gameState.setTypedWord(event.target.value) }}
    onMouseDown={handleClick}
  />;
}

export default TextField;