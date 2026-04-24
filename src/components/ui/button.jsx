import useTheme from "../../hooks/useTheme";

export default function Button({
  onClick,
  title,
  style,
  variant = "default",
  color = "primary",
  children,
  component: Component = "button",
  ...restProps
}) {
  const { getButtonTheme, mode } = useTheme();
  const innerStyle = {
    borderRadius: 10,
  };

  switch (variant) {
    case "default":
      innerStyle.border = "none";
      innerStyle.backgroundColor =
        color === "primary"
          ? "cyan"
          : color === "secondary"
            ? "purple"
            : "brown";
      innerStyle.color =
        color === "primary"
          ? "blue"
          : color === "secondary"
            ? "orange"
            : "yellow";
      break;
    case "outline":
      innerStyle.backgroundColor = "transparent";
      innerStyle.border = `1px solid ${
        color === "primary"
          ? "cyan"
          : color === "secondary"
            ? "purple"
            : "brown"
      }`;
      innerStyle.color =
        color === "primary"
          ? "cyan"
          : color === "secondary"
            ? "purple"
            : "brown";
      break;
    case "text":
      innerStyle.border = "none";
      innerStyle.backgroundColor = "transparent";
      innerStyle.textDecoration = "underline";
      innerStyle.color =
        color === "primary"
          ? "cyan"
          : color === "secondary"
            ? "purple"
            : "brown";
  }

  const themeStyle = getButtonTheme(variant, color);
  console.log("Button theme mode:", mode);
  return (
    <Component
      onClick={onClick}
      style={{ ...themeStyle, ...style }}
      {...restProps}
    >
      {title || children}
    </Component>
  );
}
