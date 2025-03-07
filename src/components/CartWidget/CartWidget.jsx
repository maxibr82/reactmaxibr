import React from "react";
import { useNavigate } from "react-router-dom";
import './CartWidget.css';

const CartWidget = ({ cartCount }) => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <div className="cart-widget" onClick={handleCartClick}>
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-count">{cartCount}</span>
    </div>
  );
};

export default CartWidget;