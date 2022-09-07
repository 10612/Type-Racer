export default function useLocalStorage() {
  function getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  function setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  return { getItem, setItem };
}