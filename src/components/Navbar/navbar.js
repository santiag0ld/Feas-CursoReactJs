import React from "react";
import CartWidget from '../CartWidget/CartWidget';
import './navbar.css';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">Vida Verde</Link>
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
            <li className="nav-item dropdown">

                <Link to="#" className="nav-link dropdown-toggle" id="productosDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Productos
                </Link>
                <div className="dropdown-menu" aria-labelledby="productosDropdown">
                  <Link to="/category/sueltos" className="dropdown-item">Sueltos</Link>
                  <Link to="/category/heladera" className="dropdown-item">Heladera</Link>
                  <Link to="/category/hierbas" className="dropdown-item">Hierbas</Link>
                </div>
            </li>
            <li className="nav-item">
              <Link to="/carrito" className="nav-link">Carrito</Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;