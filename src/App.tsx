import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Game from "./components/Game";
import Form from "./components/Form";
import NameList from "./components/NameList";

function App() {
  const [cartItems, setCartItems] = useState(["product 1", "product 2"]);

  const [showAlert, setShowAlert] = useState(false);

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  let cities = ["Barcelona", "Milan", "Munich", "Nants", "Tehran"];
  const handleSelect = (city: string) => {
    console.log(city);
  };

  const handleClick = () => {
    setGame({ ...game, player: { name: "Bezi" } });
  };

  return (
    <>
      <Navbar items={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      <NameList />
      <Form />
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
      <Game game={game.player.name} onGame={handleClick} />
    </>
  );
}

export default App;
