import { Outlet } from "react-router-dom";
import SignInBtn from "../../components/signInBtn/signinBtn.component";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cartDropdown/cartdd.component";
import { NavLinks, NavLogo, NavbarContainer, NavLink } from "./navbar.styles";
import { Atom } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useEffect } from "react";
import { selectCart } from "../../store/cart/cart.selector";
import { setDropDown, updateCountTotal } from "../../store/cart/cart.action";

function Navbar() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const { cartItems, dropDown } = useSelector(selectCart);

  const showDropDown = () => {
    dispatch(setDropDown(!dropDown));
  };
  useEffect(() => {
    const newCartItems = cartItems.filter((item) => item.quantity !== 0);
    const newCount = newCartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const totalamt = newCartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    dispatch(updateCountTotal(newCount, totalamt));
  }, [cartItems, dispatch]);

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
      {dropDown && <CartDropdown></CartDropdown>}
      <Outlet />
    </NavbarContainer>
  );
}

export default Navbar;
