import React, { useMemo } from "react";

interface Props {
  newTime: number;
  gameEnded: boolean;
  timeSpanToClock: (timeSpan: number) => string;
}

function Leaderboard({newTime, gameEnded, timeSpanToClock}: Props) {

  let leaderboard = getLeaderboard();
  let leaderboardHTML = updateLeaderboardHTML();
  useMemo(updateLeaderboard, [gameEnded]);
  

  function getLeaderboard(): number[] {
    const localLeaderboard = localStorage.getItem("leaderboard");
    if(localLeaderboard === null) {
      return [6001000, 6002000, 6003000, 6004000, 6005000];
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
    if(gameEnded && newTime !== 0) {
      const placement = leaderboard.findIndex(position => position > newTime);
      if(placement >= 0) {
        leaderboard.splice(placement, 0, newTime);
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