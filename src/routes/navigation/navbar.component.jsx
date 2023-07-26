import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../logo.svg";
import "./navbar.styles.scss";

function Navbar() {
  return (
    <div className="navbar-component">
      <Link to="/" className="nav-img">
        {" "}
        <img alt="" src={logo} className="nav-img-item" />
      </Link>
      <div className="nav-links">
        <Link className="nav-link-item" to="/">
          Home
        </Link>
        <Link className="nav-link-item" to="/shop">
          Shop
        </Link>
        <Link className="nav-link-item" to="/auth">
          Sign In
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
