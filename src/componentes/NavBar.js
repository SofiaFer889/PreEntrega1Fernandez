import "./NavBar.css";
import CartWidget from "./CartWidget";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link to='/'>
            <h3>Tienda</h3>
          </Link>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={'/category/ropa'} className="nav-link btn btn-outline-light">Ropa</Link>
            </li>
            <li className="nav-item">
              <Link to={'/category/zapatos'} className="nav-link btn btn-outline-light">Zapatos</Link>
            </li>
            <li className="nav-item">
              <Link to={'/category/accesorios'} className="nav-link btn btn-outline-light">Accesorios</Link>
            </li>
          </ul>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
