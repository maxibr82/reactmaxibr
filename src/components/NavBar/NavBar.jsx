import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>eShop</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#products">Productos</a></li>
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <div className="navbar-cart">
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
