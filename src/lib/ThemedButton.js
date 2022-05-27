import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Button from "./Button";

export default function ThemedButton({ inverted = false, ...props }) {
  const theme = useContext(ThemeContext);
  return (
    <Button
      {...props}
      bgcolor={
        theme === "light" || (theme === "dark" && inverted) ? "black" : "white"
      }
      color={
        theme === "light" || (theme === "dark" && inverted) ? "white" : "black"
      }
    />
  );
}
