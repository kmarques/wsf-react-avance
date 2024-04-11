import { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Button({
  variant = "rounded",
  color = "white",
  backgroundColor = "black",
  title,
  onClick,
  component: Component = "button",
  ...otherProps
}) {
  const { theme } = useContext(ThemeContext);
  const customStyle = {
    ...theme.button,
  };

  useEffect(() => {
    console.log("mount -> premiere apparition " + title);

    return () => {
      console.log("unmount -> avant disparition " + title);
    };
  }, []);

  switch (variant) {
    case "squared":
      customStyle.borderRadius = 0;
      break;
    case "round":
      customStyle.borderRadius = "50%";
      customStyle.height = 50;
      customStyle.width = 50;
      break;
  }

  return (
    <Component
      style={{
        color,
        backgroundColor,
        ...customStyle,
      }}
      onClick={onClick}
      children={(Component !== "input" && title) || undefined}
      {...otherProps}
    />
  );
}
