import "./App.css";
import Body from "./components/Body";
import Nav from "./components/Nav";
import ThemeProvider, { ThemeContext } from "./contexts/ThemeContext";
//import ButtonExample from "./components/ButtonExample";
import ListExample from "./components/ListExample";
//import Souschamps from "./SousChamp/SousChamps2";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
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
            <Login />
            <Register />
          </div>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}

export default App;
