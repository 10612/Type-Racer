export interface TextState {
  typedWord: string;
  textArray: string[];
  supersedeArray: () => void;
  setTypedWord: React.Dispatch<React.SetStateAction<string>>;
  removeWord: () => void;
}