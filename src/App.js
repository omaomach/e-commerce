import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./components/products/products";
import Admin from "./components/admin/admin";
import Cart from "./components/cart/cart";
import Home from "./components/home/home";
import NavBar from "./components/Global/navbar";
import Checkout from "./components/checkout/chechout";
function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/components/home/home.js" element={<Home />} />
                <Route path="/components/products/products.js" element={<Products />} />
                <Route path="/components/admin/admin.js" element={<Admin />} />
                <Route path="/components/cart/cart.js" element={<Cart />} />
                <Route path="/components/checkout/Checkout.js" element={<Checkout />} />
            </Routes>
        </Router>
    );
}
export default App;