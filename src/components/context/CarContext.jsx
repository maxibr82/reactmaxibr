import React, { createContext, useState, useEffect } from 'react';

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(count);

    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalAmount);
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
        );
      } else {
        return [...prevCart, product];
      }
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          return prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
          );
        } else {
          return prevCart.filter((item) => item.id !== product.id);
        }
      } else {
        return prevCart;
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CarContext.Provider value={{ cart, cartCount, total, addToCart, removeFromCart, clearCart }}>
      {children}
    </CarContext.Provider>
  );
};