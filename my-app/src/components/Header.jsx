import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ cart = [] }) => {
  return (
    <header className="header">
      <h1>Green Haven</h1>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})</Link>
      </nav>
    </header>
  );
};

export default Header;
