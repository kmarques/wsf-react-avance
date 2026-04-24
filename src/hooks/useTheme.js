import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import theme from "../theme";

let modeObserver = {
  handlers: [],
  current: "light",
  get value() {
    return this.current;
  },
  set value(newValue) {
    this.current = newValue;
    this.handlers.forEach((h) => h(newValue));
  },
  subscribe(callback) {
    this.handlers.push(callback);
  },
};

function useThemeContext() {
  return useContext(ThemeContext);
}

function useThemeObserver() {
  const [mode, setMode] = useState(modeObserver.value);

  useEffect(() => {
    modeObserver.subscribe(setMode);
  }, []);

  function toggleMode() {
    modeObserver.value = modeObserver.value === "light" ? "dark" : "light";
  }

  return { mode, toggleMode, theme: theme.theme, ...theme.helpers };
}

export default useThemeContext;
