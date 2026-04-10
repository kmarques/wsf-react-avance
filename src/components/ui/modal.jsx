import { useState } from "react";
import Button from "./button";

export default function Modal({
  defaultOpen = false,
  onClose,
  title,
  children,
}) {
  let [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "#FFFFFF33",
            }}
            onClick={() => setIsOpen(false)}
          ></div>
          <div
            style={{
              width: "50%",
              height: "50%",
              maxHeight: "80%",
              overflowY: "scroll",
              overflowX: "hidden",
              backgroundColor: "white",
              color: "black",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              padding: 10,
              zIndex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{title}</span>
              <Button onClick={() => setIsOpen(false)}>X</Button>
            </div>
            <div
              style={{
                flex: 1,
                width: "100%",
              }}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
