import { useState, useEffect } from "react";

const STORAGE_KEY = "google_analytics";

export function useAnalytics(): [boolean, () => void] {
  const [optedIn, setOptedIn] = useState(false);

  // load stored value
  useEffect(() => {
    const storedVal = localStorage.getItem(STORAGE_KEY);

    setOptedIn(storedVal !== "false");
  }, []);

  function toggle() {
    const storedVal = localStorage.getItem(STORAGE_KEY);
    const newVal = storedVal === "false";

    localStorage.setItem(STORAGE_KEY, newVal.toString());
    location.reload();
  }

  return [optedIn, toggle];
}
