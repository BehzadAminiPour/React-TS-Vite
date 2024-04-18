import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";

function App() {
  let cities = ["Barcelona", "Milan", "Munich", "Nants", "Tehran"];
  const handleSelect = (city: string) => {
    console.log(city);
  };
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <ListGroup cities={cities} heading="Cities" onSelectCity={handleSelect} />
      {showAlert && (
        <Alert onClick={() => setShowAlert(false)}>
          There is no other <span className="h6">feeling </span> like that!
        </Alert>
      )}
      <Button onClick={() => setShowAlert(true)} color="warning">
        Click Here!
      </Button>
      <Like onClick={() => console.log("Clicked")} />
    </>
  );
}

export default App;
