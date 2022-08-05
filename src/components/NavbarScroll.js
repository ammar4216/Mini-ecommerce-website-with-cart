import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function NavbarScroll() {
  const {totalQuantities}= useSelector(state=> state.CartReducer)
  return (
    <>
      <nav className="navbar navbar-expand-lg py-3 shadow-sm bg-dark bg-gradient">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4 text-light" to="/">
            E-Commerce Website
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active fw-bold text-light"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active fw-bold text-light"
                  aria-current="page"
                  to="/"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active fw-bold text-light"
                  aria-current="page"
                  to="#"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink
                to="/login"
                className="btn btn-outline-light me-4"
                type="submit"
              >
                <i className="fa-solid fa-right-to-bracket me-1"></i>Sign in
              </NavLink>
              <NavLink to="/cart" className="btn btn-light" type="submit">
                <i className="fa-solid fa-cart-arrow-down me-1"></i>(
                  {totalQuantities})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarScroll;
