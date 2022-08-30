import GameState, { Ref, Input } from "../../types";

export default interface Props {
  gameState: GameState;
  tabable: number;
  textFieldRef: Ref<Input | null>;
}