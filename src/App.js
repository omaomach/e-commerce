import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./navbar/Navbar";
import Products from "./components/products/products";
import Admin from "./components/admin/admin";
import Checkout from "./components/checkout/Checkout";
import Cart from "./components/cart/cart";
import Home from "./components/home/home";

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
