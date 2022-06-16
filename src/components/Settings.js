import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemedButton from "../lib/ThemedButton";

export default function Settings({ isAdmin = true }) {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <>
      {isAdmin && <ThemedButton title="Toggle Theme" onClick={toggleTheme} />}
      <ThemedButton title="Toggle Notifications" onClick={() => {}} />
      <ThemedButton title="Toggle Geolocation" onClick={() => {}} />
    </>
  );
}
