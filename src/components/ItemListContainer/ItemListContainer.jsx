import React, { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncProducts";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import './ItemListContainer.css';

const ItemListContainer = ({ greeting, setCartCount }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = categoryId ? getProductsByCategory : getProducts;
    fetchProducts(categoryId)
      .then((resp) => setProducts(resp))
      .catch((err) => console.error(err));
  }, [categoryId]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setCartCount((prevCount) => prevCount + 1);
  };

  const handleRemoveFromCart = (product) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        const newCart = [...prevCart];
        newCart.splice(index, 1);
        setCartCount((prevCount) => Math.max(prevCount - 1, 0));
        return newCart;
      }
      return prevCart;
    });
  };

  return (
    <div className="item-list-container">
      <h3>{greeting}</h3>
      <ItemList
        products={products}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
};

export default ItemListContainer;