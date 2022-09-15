export interface TimeState {
  startTime: number;
  timeElapsed: number;
  startTimer: () => void;
  updateClock: () => void;
  timeSpanToClock: TimeSpanToClock
}

export interface TimeSpanToClock {
  (timeSpan: number): string;
}