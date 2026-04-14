import { useEffect, useState } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      console.log("tick", now);
      setDate(now);
    }, 1000);

    return () => {
      console.log("[WILL_UNMOUNT] unmounting clock...");
      clearInterval(intervalId);
    };
  }, []);
  return <span>{date.toLocaleTimeString()}</span>;
}
