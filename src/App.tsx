import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import CartPage from "./pages/CartPage";
import NameListPage from "./pages/NameListPage";
import FormPage from "./pages/FormPage";
import ListGroupPage from "./pages/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

import Like from "./components/Like";
import Navbar from "./components/Navbar";

import Game from "./components/Game";

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
    <BrowserRouter>
      <Routes>
        <Route
          path="/cart"
          element={
            <CartPage cartItems={cartItems} onClear={() => setCartItems([])} />
          }
        />
        <Route path="/namelist" element={<NameListPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route
          path="/listgroup"
          element={
            <ListGroupPage
              cities={cities}
              heading="Cities"
              onSelectCity={handleSelect}
            />
          }
        />
      </Routes>
      <Navbar items={cartItems.length} />

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
    </BrowserRouter>
  );
}

export default App;
