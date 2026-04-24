import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children, theme }) {
  const [mode, setMode] = useState("light");

  function toggleMode() {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider
      value={{ mode, toggleMode, theme: theme.theme, ...theme.helpers }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
