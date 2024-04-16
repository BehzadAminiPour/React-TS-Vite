import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["Barcelona", "Milan", "Munich", "Nants", "Tehran"];
  const handleSelect = (city: string) => {
    console.log(city);
  };
  return (
    <ListGroup cities={cities} heading="Cities" onSelectCity={handleSelect} />
  );
}

export default App;
