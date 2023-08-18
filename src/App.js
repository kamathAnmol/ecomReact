import Home from "./routes/home/home.component.jsx";
import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/navigation/navbar.component.jsx";
import AuthPage from "./routes/authentication/authPage.component.jsx";
import ShopPage from "./routes/shop/shop.component.jsx";
import CheckOutPage from "./routes/checkout/checkoutpage.component.jsx";
import Category from "./routes/category/category.component.jsx";
import PaymentsPage from "./routes/payments/Payments.component.jsx";
import { useEffect } from "react";
import {
  authState,
  createUserDoc,
  signOutUser,
  getProducts,
} from "./utils/firebase/firebase.js";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.reducer.js";
import { setProducts } from "./store/products/products.reducer.js";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    signOutUser();
    const unsub = authState((user) => {
      if (user) {
        createUserDoc(user);
      }
      dispatch(setCurrentUser(user));
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
