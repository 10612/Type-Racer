import React from "react";
import { Clock, WordsToType, TextField, Leaderboard } from "components";
import "./style.css";

export function Body() {

  return (
    <div>
      <Clock />
      <div className="textContainer">
        <WordsToType />
        <TextField
        />
      </div>
      <Leaderboard />
    </div>
  );
}