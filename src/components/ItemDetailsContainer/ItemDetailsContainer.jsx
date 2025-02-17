import React, { useState, useEffect } from "react";
import { getProductsById } from "../../asyncProducts";
import { useParams } from "react-router-dom";
import './ItemDetailsContainer.css';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ItemDetailsContainer = ({ onAddToCart, onRemoveFromCart }) => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    getProductsById(itemId)
      .then((resp) => setProduct(resp))
      .catch((err) => console.error(err));
  }, [itemId]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      onAddToCart({ ...product, quantity: count });
      toast.success(`Producto ${product.name} agregado al carrito`);
    }
  };

  const handleRemoveFromCart = () => {
    if (product) {
      onRemoveFromCart(product);
      toast.error(`Producto ${product.name} eliminado del carrito`);
    }
  };

  return (
    <div className="item-details-container">
      <ToastContainer />
      {product ? (
        <div className="card">
          <img src={product.img} className="card-img-top" alt={product.name} />
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p className="card-text">{product.descrip}</p>
            <p className="card-text fw-bold">${product.price}</p>
            <div className="counter">
              <button className="btn btn-secondary" onClick={handleDecrement}>-</button>
              <span className="count">{count}</span>
              <button className="btn btn-secondary" onClick={handleIncrement}>+</button>
            </div>
            <button className="btn btn-success mt-3" onClick={handleAddToCart}>
              Agregar al carrito
            </button>
            <button className="btn btn-danger mt-3" onClick={handleRemoveFromCart}>
              Eliminar del carrito
            </button>
          </div>
        </div>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailsContainer;