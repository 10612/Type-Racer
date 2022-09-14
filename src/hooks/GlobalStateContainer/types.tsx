export interface Global {
  gameStarted: boolean;
  typedWord: string;
  textArray: string[];
  startTime: number;
  timeElapsed: number;
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
  setTextArray: React.Dispatch<React.SetStateAction<string[]>>;
  setTypedWord: React.Dispatch<React.SetStateAction<string>>;
  setStartTime: React.Dispatch<React.SetStateAction<number>>;
  setTimeElapsed: React.Dispatch<React.SetStateAction<number>>;
}