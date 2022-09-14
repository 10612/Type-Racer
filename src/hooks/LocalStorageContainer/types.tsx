export interface LocalStorage {
  getItem: unknown;
  setItem: SetItem;
}

export interface SetItem {
  (value: unknown): void;
}