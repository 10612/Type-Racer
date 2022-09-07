export interface GameState {
  gameStarted: boolean;
  toggleGame: () => void;
};

export interface TextState {
  typedWord: string;
  textArray: string[];
  supersedeArray: () => void;
  setTypedWord: React.Dispatch<React.SetStateAction<string>>;
  removeWord: () => void;
};

export interface TimeState {
  startTime: number;
  timeElapsed: number;
  startTimer: () => void;
  updateClock: () => void;
};

export interface Global extends GameState, TextState, TimeState {
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
  setTextArray: React.Dispatch<React.SetStateAction<string[]>>;
  setStartTime: React.Dispatch<React.SetStateAction<number>>;
  setTimeElapsed: React.Dispatch<React.SetStateAction<number>>;
}