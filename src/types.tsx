export default interface GameState {
  startTime: number;
  gameStarted: boolean;
  timeElapsed: number;
  typedWord: string;
  textArray: string[];
  setStarted: React.Dispatch<React.SetStateAction<boolean>>;
  setStartTime: React.Dispatch<React.SetStateAction<number>>;
  setTimeElapsed: React.Dispatch<React.SetStateAction<number>>;
  setTypedWord: React.Dispatch<React.SetStateAction<string>>;
  setTextArray: React.Dispatch<React.SetStateAction<string[]>>;
};

export type Ref<T> = React.MutableRefObject<T>;
export type Click<T> = React.MouseEvent<T>;
export type Input = HTMLInputElement;
export type Button = HTMLButtonElement;