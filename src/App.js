import logo from "./logo.svg";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Admin from "./components/admin/admin";
import Checkout from "./components/checkout/Checkout";

function App() {
	return (
		<Router>
            <Navbar />
            <Routes>
                <Route path="/components/home" element={<Home />}/>
                <Route path="/components/products" element={<Products />}/>
                <Route path="/components/cart" element={<Cart />}/>
                <Route path="/components/admin" element={<Admin />}/>
            </Routes>
            <Checkout />
        </Router>
	);
}

export default App;
