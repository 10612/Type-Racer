import React from "react";
import useTextState from "../../hooks/TextState";
import { TextState } from "../../types";
import "./style.css";

function WordsToType() {
  const { textArray }: TextState = useTextState();
  const textToType = textArray.slice(0, 30).join(" ");

  return <p className="textToType">{textToType || "The game will start once you start the clock."}</p>;
}

export default WordsToType;