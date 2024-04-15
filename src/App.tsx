import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["Barcelona", "Milan", "Munich", "Nants", "Tehran"];
  return <ListGroup cities={cities} heading="Cities" />;
}

export default App;
