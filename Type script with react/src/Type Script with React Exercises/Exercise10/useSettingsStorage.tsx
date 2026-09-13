import { useState } from "react";

interface Settings {
  language: string;
  notifications: boolean;
}

function useSettingsStorage(
  key: string,
  initialSettings: Settings
): [Settings, (settings: Settings) => void] {
  const [settings, setSettings] = useState<Settings>(() => {
    const storedSettings = localStorage.getItem(key);

    return storedSettings
      ? JSON.parse(storedSettings)
      : initialSettings;
  });

  const updateSettings = (newSettings: Settings) => {
    setSettings(newSettings);
    localStorage.setItem(key, JSON.stringify(newSettings));
  };

  return [settings, updateSettings];
}

export default useSettingsStorage;