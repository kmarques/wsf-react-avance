import { createContext, useState } from "react";

export const ThemeContext = createContext({
  button: {},
});

export function ThemeProvider({ defaultTheme, children }) {
  const [theme, setTheme] = useState(defaultTheme);
  function toggleTheme() {
    setTheme((theme) => ({
      ...theme,
      button: {
        ...theme.button,
        color: theme.button.backgroundColor,
        backgroundColor: theme.button.color,
      },
    }));
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
