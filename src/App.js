import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Nav from "./components/Nav";
import { ThemeContext } from "./contexts/ThemeContext";
//import ButtonExample from "./components/ButtonExample";
//import ListExample from "./components/ListExample";
//import Souschamps from "./SousChamp/SousChamps2";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className="App"
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
        }}
      >
        <Nav />
        <p>Test</p>
        <Body />
        {/**<ButtonExample />**/}
        {/**<Souschamps nbItempsByRow={4} />**/}
        {/**<ListExample />**/}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
