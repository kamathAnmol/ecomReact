import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/navigation/navbar.component";
import AuthPage from "./routes/authentication/authPage.component";
import ShopPage from "./routes/shop/shop.component";
import CheckOutPage from "./routes/checkout/checkoutpage.component";
import Category from "./routes/category/category.component";
import PaymentsPage from "./routes/payments/Payments.component";
import { useEffect } from "react";
import {
  authState,
  createUserDoc,
  signOutUser,
  getProducts,
} from "./utils/firebase/firebase";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.reducer";
import { setProducts } from "./store/products/products.reducer";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    signOutUser();
    const unsub = authState((user) => {
      if (user) {
        createUserDoc(user);
      }
      dispatch(setCurrentUser(user ? user : null));
    });
    const getProductData = async () => {
      const newProducts = await getProducts();
      dispatch(setProducts(newProducts));
    };
    getProductData();
    return unsub;
  }, [dispatch]);
  return (
    <div className="App">
      <div style={{ height: "10vh" }}></div>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="auth" element={<AuthPage />}></Route>
        <Route path="shop" element={<ShopPage />}></Route>
        <Route path="checkout" element={<CheckOutPage />}></Route>
        <Route path="category/:category" element={<Category />}></Route>
        <Route path="payment" element={<PaymentsPage />}></Route>
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
