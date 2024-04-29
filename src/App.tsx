import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
// Pages
import CartPage from "./pages/CartPage";
import NameListPage from "./pages/NameListPage";
import FormPage from "./pages/FormPage";
import ListGroupPage from "./pages/ListGroup";
import LikePage from "./pages/LikePage";
import GamePage from "./pages/GamePage";
import ErrorPage from "./pages/ErrorPage";
//Components
import Alert from "./components/Alert";
import Button from "./components/Button";
import Home from "./pages/Home";

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
        <Route path="/" element={<Home items={cartItems.length} />}>
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                onClear={() => setCartItems([])}
              />
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
          <Route
            path="/like"
            element={<LikePage onClick={() => console.log("Clicked")} />}
          />
          <Route
            path="/game"
            element={<GamePage game={game.player.name} onGame={handleClick} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>

      {showAlert && (
        <Alert onClick={() => setShowAlert(false)}>
          There is no other <span className="h6">feeling </span> like that!
        </Alert>
      )}
      <Button onClick={() => setShowAlert(true)} color="warning">
        Click Here!
      </Button>
    </BrowserRouter>
  );
}

export default App;
