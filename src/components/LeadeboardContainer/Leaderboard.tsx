import React, { useState, useEffect, useMemo } from "react";
import { useGameState, useTimeState, useLocalStorage } from "hooks";
import "./style.css";

export function Leaderboard() {

  const { gameStarted } = useGameState();
  const { timeElapsed, timeSpanToClock } = useTimeState();
  const { getItem, setItem } = useLocalStorage("leaderboard");
  const leaderboardArray = useMemo(() => typeof getItem === "number" ? [6001000, 6002000, 6003000, 6004000, 6005000] : getItem, []) as number[];
  const [leaderboard, setLeaderboard] = useState(leaderboardArray);
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
    setItem(leaderboard);
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