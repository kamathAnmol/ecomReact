import Home from "./routes/home/home.component.jsx";
import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/navigation/navbar.component.jsx";
import Signin from "./routes/signin/signin.component.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="signin" element={<Signin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
