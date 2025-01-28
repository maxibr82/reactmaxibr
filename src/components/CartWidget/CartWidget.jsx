import React from 'react';
import './CartWidget.css';

function CartWidget() {
  const itemCount = 5; // Número hardcodeado

  return (
    <div className="cart-widget">
      <button className="cart-button">
        🛒
        <span className="cart-count">{itemCount}</span>
      </button>
    </div>
  );
}

export default CartWidget;