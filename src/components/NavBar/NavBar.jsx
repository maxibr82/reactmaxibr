import React, { useContext } from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import './NavBar.css';
import { CarContext } from "../context/CarContext";

const NavBar = () => {
  const { cartCount } = useContext(CarContext);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
          <h1>eShop</h1>
        </NavLink>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/category/auriculares" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Auriculares
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/parlantes" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Parlantes
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/notebooks" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Notebooks
          </NavLink>
        </li>
      </ul>
      <div className="navbar-cart">
        <CartWidget cartCount={cartCount} />
      </div>
    </nav>
  );
};

export default NavBar;