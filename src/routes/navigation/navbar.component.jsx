import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../logo.svg";
import "./navbar.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/users.context";
import SignInBtn from "../../components/signInBtn/signinBtn.component";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cartDropdown/cartdd.component";
function Navbar() {
  const { currentUser } = useContext(UserContext);
  const [showDD, setShowDD] = useState(false);
  const showDropDown = () => {
    setShowDD(!showDD);
    console.log("clicked");
  };
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
        <CartIcon onClick={showDropDown}></CartIcon>

        <Link className="nav-link-item" to="/auth">
          {currentUser ? (
            <SignInBtn label="Sign Out" onClick={signOutUser}></SignInBtn>
          ) : (
            <SignInBtn label="Sign In"></SignInBtn>
          )}
        </Link>
      </div>
      {showDD && <CartDropdown className="cartdd-container"></CartDropdown>}
      <Outlet />
    </div>
  );
}

export default Navbar;
