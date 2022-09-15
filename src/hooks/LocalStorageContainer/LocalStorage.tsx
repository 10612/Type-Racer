import { useCallback, useMemo } from "react";
import { LocalStorage, SetItem } from "./types";

export function useLocalStorage(key: string) {

  const getItem = useMemo<unknown>(() => JSON.parse(localStorage.getItem(key) || "1"), []);

  const setItem = useCallback<SetItem>(value => localStorage.setItem(key, JSON.stringify(value)), [key]);

  return { getItem, setItem } as LocalStorage;
}