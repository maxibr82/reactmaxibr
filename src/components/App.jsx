import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailsContainer from "./ItemDetailsContainer/ItemDetailsContainer";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (product) => {
    // Lógica para agregar el producto al carrito
    setCartCount((prevCount) => prevCount + product.quantity);
  };

  const handleRemoveFromCart = (product) => {
    // Lógica para eliminar el producto del carrito
    setCartCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  return (
    <BrowserRouter>
      <NavBar cartCount={cartCount} />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer
              greeting="Bienvenido eShop!"
              setCartCount={setCartCount}
            />
          }
        />
        <Route
          path="/category/:categoryId"
          element={
            <ItemListContainer
              greeting="Categoria"
              setCartCount={setCartCount}
            />
          }
        />
        <Route
          path="/item/:itemId"
          element={<ItemDetailsContainer onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />}
        />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
}