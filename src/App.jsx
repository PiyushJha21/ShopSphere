import { useState } from "react";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <>
      <Navbar />

      <Home />

      <Products addToCart={addToCart} />

      <Cart cartItems={cartItems} />
    </>
  );
}

export default App;