import React from "react";
import Props from "./types";
import "./style.css";

function WordsToType({ gameState }: Props) {
  const textToType = gameState.textArray.slice(0, 30).join(" ");

  return <p id="textToType">{textToType}</p>;
}

export default WordsToType;