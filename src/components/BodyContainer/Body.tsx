import React from "react";
import Clock from "../ClockContainer/Clock";
import WordsToType from "../WordsToTypeContainer/WordsToType";
import TextField from "../TextFieldContainer/TextField";
import Leaderboard from "../LeadeboardContainer/Leaderboard";
import "./style.css";

function Body() {

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

export default Body;