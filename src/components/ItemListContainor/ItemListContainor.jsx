import React from 'react';
import './ItemListContainor.css';

function ItemListContainor({ greeting }) {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
    </div>
  );
}

export default ItemListContainor;