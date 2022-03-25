import { useEffect, useState } from "react";

export default function Collapse({
  title,
  content,
  value = false,
  onOpen = () => {},
}) {
  const [isOpen, setIsOpen] = useState(value);

  useEffect(() => {
    setIsOpen(value);
  }, [value]);

  useEffect(() => {
    onOpen(isOpen);
  }, [isOpen]);

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>{title}</div>
      <div style={{ display: isOpen ? "block" : "none" }}>{content}</div>
    </div>
  );
}
