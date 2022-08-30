import GameState from "./types";

export function timeSpanToClock(timeSpan: number): string {
  return ("0" + Math.trunc(timeSpan / 60000)).slice(-2) + ":" +
    ("0" + Math.trunc(timeSpan / 1000) % 60).slice(-2) + "." +
    ("00" + Math.trunc(timeSpan % 1000)).slice(-3);
}

export function updateClock(gameState: GameState): void {
  gameState.setTimeElapsed(Date.now() - gameState.startTime);
}