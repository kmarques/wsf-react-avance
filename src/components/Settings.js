import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemedButton from "../lib/ThemedButton";

export default function Settings({ isAdmin = true }) {
  const theme = useContext(ThemeContext);
  function handleThemeClick() {
    const setTheme = () => {};
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <>
      {isAdmin && (
        <ThemedButton title="Toggle Theme" onClick={handleThemeClick} />
      )}
      <ThemedButton title="Toggle Notifications" onClick={() => {}} />
      <ThemedButton title="Toggle Geolocation" onClick={() => {}} />
    </>
  );
}
