import { useEffect } from "react";

export default function Button({
  variant = "rounded",
  color = "white",
  backgroundColor = "black",
  title,
  onClick,
}) {
  const customStyle = {
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
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
    <div
      style={{
        color,
        backgroundColor,
        ...customStyle,
      }}
      onClick={onClick}
    >
      {title}
    </div>
  );
}
