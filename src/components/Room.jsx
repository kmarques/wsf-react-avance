import { useEffect, useState } from "react";
import List from "./list";

function connectSocket(roomId, onMessage) {
  console.log("Connecting to socket for room", roomId);

  return {
    close() {
      console.log("Closing socket connection for room", roomId);
    },
  };
}

export default function Room({ roomId }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = connectSocket(roomId, (message) => {
      console.log("Received message", message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      console.log("[WILL_UNMOUNT] unmounting room...");
      socket.close();
    };
  }, [roomId]);

  return <List data={messages} renderItem={(message) => message.text} />;
}
