import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "@mui/material"
import Prd from "./components/products/Prd";
import Admin from "./components/admin/admin";
import Cart from "./components/cart/cart";
import Home from "./components/home/home";
import NavBar from "./components/Global/navbar";
import ProductDetailsCard from "./components/product details/productDetails"
import Checkout from "./components/checkout/Checkout";
function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/components/home/home.js" element={<Home />} />
                <Route path="/components/products/Prd.js" element={<Prd />} />
                <Route path="/components/admin/admin.js" element={<Admin />} />
                <Route path="/components/cart/cart.js" element={<Cart />} />
                <Route path="/components/product details/productDetails.js" element={<ProductDetailsCard />} />
                <Route path="/components/checkout/Checkout.js" element={<Checkout />} />
            </Routes>
        </Router>
    );
}
export default App;

