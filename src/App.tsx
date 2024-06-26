import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
// Pages
import SharedLayout from "./pages/SharedLayout";
import CartPage from "./pages/CartPage";
import NameListPage from "./pages/NameListPage";
import FormPage from "./pages/FormPage";
import ListGroupPage from "./pages/ListGroup";
import LikePage from "./pages/LikePage";
import GamePage from "./pages/GamePage";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import products from "./data";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  const [cartItems, setCartItems] = useState(products);
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleFormSubmit = (data: FormData) => {
    setFormData(data);
  };
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
        <Route path="/" element={<SharedLayout items={cartItems.length} />}>
          <Route index element={<Home />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                onClear={() => setCartItems([])}
              />
            }
          />
          <Route path="/cart/:cartId" element={<SingleProduct />} />
          <Route path="/namelist" element={<NameListPage />} />
          <Route
            path="/form"
            element={<FormPage onSubmit={handleFormSubmit} />}
          />
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
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute formData={formData}>
                <Dashboard formData={formData} />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
