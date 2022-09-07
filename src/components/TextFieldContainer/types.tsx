export interface HandleClick {
  (event: React.MouseEvent<HTMLInputElement>): void;
}
export interface HandleKeyDown {
  (event: React.KeyboardEvent<HTMLInputElement>): void;
}

export type TextFieldRef = React.MutableRefObject<HTMLInputElement | null>;
