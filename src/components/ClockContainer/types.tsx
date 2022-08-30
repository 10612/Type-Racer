import GameState, { Ref, Click, Button } from "../../types";

export default interface Props {
  gameState: GameState;
  startGame: (event: Click<Button>) => void;
  clockRef: Ref<Button | null>;
}