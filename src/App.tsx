import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["Barcelona", "Milan", "Munich", "Nants", "Tehran"];
  const handleSelect = (city: string) => {
    console.log(city);
  };
  return (
    <>
      <ListGroup cities={cities} heading="Cities" onSelectCity={handleSelect} />
      <Alert>
        There is no other <span className="h6">feeling </span> like that!
      </Alert>
    </>
  );
}

export default App;
