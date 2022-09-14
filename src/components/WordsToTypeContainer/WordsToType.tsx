import React from "react";
import { useTextState } from "hooks";
import "./style.css";

export function WordsToType() {
  const { textArray } = useTextState();
  const textToType = textArray.slice(0, 30).join(" ");

  return <p className="textToType">{textToType || "The game will start once you start the clock."}</p>;
}