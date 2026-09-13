import { useState } from "react";

function useNumberStorage(
  key: string,
  initialValue: number
): [number, (val: number) => void] {
  const [value, setValue] = useState<number>(() => {
    const storedValue = localStorage.getItem(key);

    return storedValue !== null
      ? Number(storedValue)
      : initialValue;
  });

  const setStoredValue = (val: number) => {
    setValue(val);
    localStorage.setItem(key, String(val));
  };

  return [value, setStoredValue];
}

export default useNumberStorage;