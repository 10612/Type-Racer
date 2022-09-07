import useLocalStorage from "../../hooks/LocalStorage";

export default function getLeaderboard(): number[] {
  const { getItem } = useLocalStorage();
  const localLeaderboard = getItem("leaderboard");
  if (localLeaderboard === null) {
    return [6001000, 6002000, 6003000, 6004000, 6005000];
  }
  else {
    return JSON.parse(localLeaderboard);
  }
}