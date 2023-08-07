import Home from "./routes/home/home.component.jsx";
import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/navigation/navbar.component.jsx";
import AuthPage from "./routes/authentication/authPage.component.jsx";
import ShopPage from "./routes/shop/shop.component.jsx";
import CheckOutPage from "./routes/checkout/checkoutpage.component.jsx";
import Category from "./routes/category/category.component.jsx";
import { useEffect } from "react";
import {
  authState,
  createUserDoc,
  signOutUser,
} from "./utils/firebase/firebase.js";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.action";
function App() {
  const disptach = useDispatch();
  useEffect(() => {
    signOutUser();
    const unsub = authState((user) => {
      if (user) {
        createUserDoc(user);
      }
      disptach(setCurrentUser(user));
    });
    return unsub;
  }, [disptach]);
  return (
    <div className="App">
      <div style={{ height: "10vh" }}></div>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="auth" element={<AuthPage />}></Route>
        <Route path="shop" element={<ShopPage />}></Route>
        <Route path="checkout" element={<CheckOutPage />}></Route>
        <Route path="category/:category" element={<Category />}></Route>
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
