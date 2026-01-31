
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login.jsx"
import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile.jsx";
import ProductsPage from "./pages/product/Product.jsx";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Home Page */}
        <Route path="/home" element={<Home />} />

        {/* Profile Page */}
        <Route path="/profile" element={<Profile/>} />

           {/* Profile Page */}
        <Route path="/products" element={<ProductsPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
