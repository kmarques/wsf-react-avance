const buttonColorMap = {
  primary: {
    solidBg: "cyan",
    solidText: "blue",
    accent: "cyan",
  },
  secondary: {
    solidBg: "purple",
    solidText: "orange",
    accent: "purple",
  },
  tertiary: {
    solidBg: "brown",
    solidText: "yellow",
    accent: "brown",
  },
};

function getButtonColors(color = "primary") {
  return buttonColorMap[color] ?? buttonColorMap.tertiary;
}

export const theme = {
  button: {
    default: {
      primary: {
        borderRadius: 10,
        border: "none",
        backgroundColor: buttonColorMap.primary.solidBg,
        color: buttonColorMap.primary.solidText,
      },
      secondary: {
        borderRadius: 10,
        border: "none",
        backgroundColor: buttonColorMap.secondary.solidBg,
        color: buttonColorMap.secondary.solidText,
      },
      tertiary: {
        borderRadius: 10,
        border: "none",
        backgroundColor: buttonColorMap.tertiary.solidBg,
        color: buttonColorMap.tertiary.solidText,
      },
    },
    outline: {
      primary: {
        borderRadius: 10,
        backgroundColor: "transparent",
        border: `1px solid ${buttonColorMap.primary.accent}`,
        color: buttonColorMap.primary.accent,
      },
      secondary: {
        borderRadius: 10,
        backgroundColor: "transparent",
        border: `1px solid ${buttonColorMap.secondary.accent}`,
        color: buttonColorMap.secondary.accent,
      },
      tertiary: {
        borderRadius: 10,
        backgroundColor: "transparent",
        border: `1px solid ${buttonColorMap.tertiary.accent}`,
        color: buttonColorMap.tertiary.accent,
      },
    },
    text: {
      primary: {
        borderRadius: 10,
        border: "none",
        backgroundColor: "transparent",
        textDecoration: "underline",
        color: buttonColorMap.primary.accent,
      },
      secondary: {
        borderRadius: 10,
        border: "none",
        backgroundColor: "transparent",
        textDecoration: "underline",
        color: buttonColorMap.secondary.accent,
      },
      tertiary: {
        borderRadius: 10,
        border: "none",
        backgroundColor: "transparent",
        textDecoration: "underline",
        color: buttonColorMap.tertiary.accent,
      },
    },
  },
};

// Helper optionnel pour récupérer un style avec fallback.
export function getButtonTheme(variant = "default", color = "primary") {
  const colors = getButtonColors(color);
  const normalizedColor = buttonColorMap[color] ? color : "tertiary";

  const variantTheme = theme.button[variant] ?? theme.button.default;

  return (
    variantTheme[normalizedColor] ?? {
      borderRadius: 10,
      border: variant === "outline" ? `1px solid ${colors.accent}` : "none",
      backgroundColor: variant === "default" ? colors.solidBg : "transparent",
      color: variant === "default" ? colors.solidText : colors.accent,
      ...(variant === "text" ? { textDecoration: "underline" } : {}),
    }
  );
}

export default { theme, helpers: { getButtonTheme } };
