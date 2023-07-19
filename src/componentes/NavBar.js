import CartWidget from "./CartWidget";
import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <h3>Tienda</h3>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <button type="button" className="btn btn-outline-light">Ropa</button>
            <button type="button" className="btn btn-outline-light">Zapatos</button>
            <button type="button" className="btn btn-outline-light">Accesorios</button>
          </ul>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
