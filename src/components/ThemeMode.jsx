import Button from "./ui/button";
import useTheme from "../hooks/useTheme";

export default function ThemeMode() {
  const { mode, toggleMode } = useTheme();

  return (
    <div>
      <p>Current theme: {mode}</p>
      <Button onClick={toggleMode}>Toggle theme</Button>
    </div>
  );
}
