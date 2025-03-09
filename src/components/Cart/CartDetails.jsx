import React, { useContext } from 'react';
import { CarContext } from '../context/CarContext';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
    toast.error(`Producto ${item.name} eliminado del carrito`);
  };

  // Calcular el total de los productos en el carrito
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-details-container">
      <ToastContainer />
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
                <p>Precio: ${item.price.toLocaleString('es-ES')}</p>
                <p>Cantidad: {item.quantity}</p>
                <p className="subtotal">Subtotal: ${(item.price * item.quantity).toLocaleString('es-ES')}</p> {/* Mostrar el subtotal */}
              </div>
              <button className="btn btn-danger btn-sm" onClick={() => handleRemoveFromCart(item)}>
                Eliminar
              </button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${total.toLocaleString('es-ES')}</h3>
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