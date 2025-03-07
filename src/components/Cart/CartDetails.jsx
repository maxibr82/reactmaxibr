import React, { useContext } from 'react';
import { CarContext } from '../context/CarContext';
import { useNavigate } from 'react-router-dom';
import './CartDetails.css';

const CartDetails = () => {
  const { cart, clearCart, removeFromCart } = useContext(CarContext);
  const navigate = useNavigate();

  const handleClearCart = () => {
    clearCart();
    navigate('/');
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  // Calcular el total de los productos en el carrito
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-details-container">
      <h2>Detalles del Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} className="cart-item-img" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.descrip}</p>
                <p>${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
              </div>
              <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item)}>
                Eliminar
              </button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
          <button className="btn btn-danger mt-3" onClick={handleClearCart}>
            Limpiar carrito
          </button>
          <button className="btn btn-primary mt-3" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartDetails;