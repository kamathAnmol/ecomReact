import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/users.context";
import SignInBtn from "../../components/signInBtn/signinBtn.component";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cartDropdown/cartdd.component";
import { NavLinks, NavLogo, NavbarContainer, NavLink } from "./navbar.styles";
import { Atom } from "lucide-react";
import { CartContext } from "../../contexts/cart.context";

function Navbar() {
  const { currentUser } = useContext(UserContext);
  const { showDD, setShowDD } = useContext(CartContext);
  const showDropDown = () => {
    setShowDD(!showDD);
  };
  return (
    <NavbarContainer>
      <NavLogo to="/">
        <Atom size={48} />
      </NavLogo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <CartIcon onClick={showDropDown}></CartIcon>

        <NavLink to="/auth">
          {currentUser ? (
            <SignInBtn label="Sign Out" onClick={signOutUser}></SignInBtn>
          ) : (
            <SignInBtn label="Sign In"></SignInBtn>
          )}
        </NavLink>
      </NavLinks>
      {showDD && <CartDropdown></CartDropdown>}
      <Outlet />
    </NavbarContainer>
  );
}

export default Navbar;
