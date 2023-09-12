import React from 'react';
import CartWidget from './CartWidget/CartWidget';
import '../index.css'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
  <div className="container">
    <a className="navbar-brand" href="/">Vida Verde</a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/productos">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/carrito">Carrito</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contacto">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
  <CartWidget />
</nav>
  );
};

export default Navbar;