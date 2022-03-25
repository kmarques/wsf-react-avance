import logo from "./logo.svg";
import "./App.css";
import Button from "./lib/Button";
import Souschamps from "./SousChamp/SousChamps2";
import ListContainer from "./lib/ListContainer";

function ComponentWithTitle({ item }) {
  return <div>{item.title}</div>;
}

function ComponentWithLink({ item }) {
  return <a href={item.link}>{item.description}</a>;
}

function App(props) {
  return (
    <div className="App">
      <Button title="Button1" rounded={true} color={"red"} />
      <Button title="Button2" rounded={true} color={"green"} />
      <Souschamps nbItempsByRow={4} />
      <ListContainer
        data={[{ title: 1 }, { title: 2 }]}
        ItemComponent={ComponentWithTitle}
      />
      <ListContainer
        data={[
          {
            description: "google",
            link: "https://google.fr",
          },
          { description: "facebook", link: "https://facebook.fr" },
        ]}
        ItemComponent={ComponentWithLink}
      />
      <ListContainer
        data={[
          {
            id: 1,
            title: "fourchette",
            completed: false,
          },
          {
            id: 2,
            title: "pomme",
            completed: true,
          },
          {
            id: 3,
            title: "banane",
            completed: false,
          },
          {
            id: 4,
            title: "orange",
            completed: false,
          },
        ]}
        ItemComponent={({ item }) => (
          <div>
            {item.title}
            {item.completed ? "completed" : "not completed"}
          </div>
        )}
      />
    </div>
  );
}
    </div>
  );
}

export default App;
