import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
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
    </div>
  );
}

export default App;
