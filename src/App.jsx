import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailsContainer from "./components/ItemDetailsContainer/ItemDetailsContainer";
import { CarProvider } from "./components/context/CarContext";
import CartDetails from "./components/Cart/CartDetails";
import Checkout from "./components/Checkout/Checkout";

export default function App() {
  return (
    <CarProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenido eShop!" />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer greeting="Categoria" />}
          />
          <Route
            path="/item/:itemId"
            element={<ItemDetailsContainer />}
          />
          <Route
            path="/cart"
            element={<CartDetails />}
          />
          <Route
            path="/checkout"
            element={<Checkout />}
          />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </CarProvider>
  );
}