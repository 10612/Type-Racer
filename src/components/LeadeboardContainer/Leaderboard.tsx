import React, { useMemo } from "react";
import { timeSpanToClock } from "../../utils";
import Props from "./types";
import "./style.css";

function Leaderboard({ gameState }: Props) {

  let leaderboard = getLeaderboard();
  let leaderboardHTML = updateLeaderboardHTML();
  useMemo(updateLeaderboard, [!gameState.gameStarted]);


  function getLeaderboard(): number[] {
    const localLeaderboard = localStorage.getItem("leaderboard");
    if (localLeaderboard === null) {
      return [30001000, 24002000, 18003000, 12004000, 6005000];
    }
    else {
      return JSON.parse(localLeaderboard);
    }
  }

  function updateLeaderboardHTML(): JSX.Element[] {
    return leaderboard.map((time, placement) =>
      <li key={placement}>
        {timeSpanToClock(time)}
      </li>
    );
  }

  function updateLeaderboard(): void {
    if (!gameState.gameStarted && gameState.timeElapsed !== 0) {
      const placement = leaderboard.findIndex(position => position > gameState.timeElapsed);
      if (placement >= 0) {
        leaderboard.splice(placement, 0, gameState.timeElapsed);
        leaderboard.pop();
        localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
        leaderboardHTML = updateLeaderboardHTML();
      }
    }
  }

  return (
    <div id="leaderboard">
      <h2>Leaderboard</h2>
      <ol>{leaderboardHTML}</ol>
    </div>
  );
}

export default Leaderboard;