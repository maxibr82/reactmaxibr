import React from "react";
import './CartWidget.css';

const CartWidget = ({ cartCount }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-count">{cartCount}</span>
    </div>
  );
};

export default CartWidget;