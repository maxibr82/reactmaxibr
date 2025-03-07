import React, { useState, useEffect, useContext } from "react";
import { db } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";
import './ItemDetailsContainer.css';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { CarContext } from "../context/CarContext";

const ItemDetailsContainer = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const { addToCart, removeFromCart } = useContext(CarContext);
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "items", itemId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No such document!");
      }
    };

    fetchProduct();
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
      addToCart({ ...product, quantity: count });
      toast.success(`Producto ${product.name} agregado al carrito`);
    }
  };

  const handleRemoveFromCart = () => {
    if (product) {
      removeFromCart(product);
      toast.error(`Producto ${product.name} eliminado del carrito`);
    }
  };

  const handleCheckout = () => {
    navigate('/cart');
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
            <button className="btn btn-primary mt-3" onClick={handleCheckout}>
              Terminar compra
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