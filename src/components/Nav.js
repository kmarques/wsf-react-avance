import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import NavLink from "./NavLink";

export default function Nav() {
  const { theme } = useContext(ThemeContext);
  return (
    <nav
      style={{
        backgroundColor: theme === "light" ? "black" : "white",
        color: theme === "light" ? "white" : "black",
      }}
    >
      <h3>Site title</h3>
      <NavLink title="Google" href="https://google.com" />
      <NavLink title="Discord" href="https://discord.com" />
    </nav>
  );
}
