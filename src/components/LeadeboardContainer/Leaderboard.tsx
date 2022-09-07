import React, { useState, useEffect, useMemo } from "react";
import useGameState from "../../hooks/GameState";
import useTimeState from "../../hooks/TimeState";
import useLocalStorage from "../../hooks/LocalStorage";
import getLeaderboard from "./utils";
import { timeSpanToClock } from "../../utils";
import { GameState, TimeState } from "../../types";
import "./style.css";

function Leaderboard() {

  const { gameStarted }: GameState = useGameState();
  const { timeElapsed }: TimeState = useTimeState();
  const { setItem } = useLocalStorage();
  const [leaderboard, setLeaderboard] = useState(getLeaderboard());
  useEffect(updateLeaderboard, [gameStarted]);
  const leaderboardList = useMemo(updateLeaderboardList, [leaderboard]);

  function updateLeaderboard(): void {
    if (!gameStarted && timeElapsed !== 0) {
      const placement = leaderboard.findIndex(position => position > timeElapsed);
      if (placement >= 0) {
        setLeaderboard(leaderboard.slice(0, placement).concat([timeElapsed], leaderboard.slice(placement, 4)));
      }
    }
  }

  function updateLeaderboardList(): JSX.Element[] {
    setItem("leaderboard", JSON.stringify(leaderboard));
    return leaderboard.map((time, placement) =>
      <li key={placement}>
        {timeSpanToClock(time)}
      </li>
    );
  }

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ol>{leaderboardList}</ol>
    </div>
  );
}

export default Leaderboard;