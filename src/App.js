import Home from "./routes/home/home.component.jsx";
import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/navigation/navbar.component.jsx";
import AuthPage from "./routes/authentication/authPage.component.jsx";
import ShopPage from "./routes/shop/shop.component.jsx";
import CheckOutPage from "./routes/checkout/checkoutpage.component.jsx";

function App() {
  return (
    <div className="App">
      <div style={{ height: "10vh" }}></div>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="auth" element={<AuthPage />}></Route>
        <Route path="shop" element={<ShopPage />}></Route>
        <Route path="checkout" element={<CheckOutPage />}></Route>
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
