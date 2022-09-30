import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg bg-dark">
			<div className="container-fluid">
				<NavLink className="navbar-brand" to="#">
					<img
						src="https://img.icons8.com/nolan/48/warning-shield.png"
						width="30"
						className="logo"
					/>
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ml-auto">
						<NavLink
							className="nav-link active"
							aria-current="page"
							to="/components/home/home.js"
						>
							Home
						</NavLink>
						<NavLink className="nav-link" to="/components/products/products.js">
							Products
						</NavLink>
						<NavLink className="nav-link" to="/components/cart/cart.js">
							Cart
						</NavLink>
						<NavLink className="nav-link" to="/components/admin/admin.js">
							Admin
						</NavLink>

						<NavLink className="nav-link" to="/components/checkout/Checkout.js">
							Checkout
						</NavLink>
						<NavLink className="nav-link" to="#">
							<img
								src="https://i.imgur.com/C4egmYM.jpg"
								className="rounded-circle"
								width="30"
							/>
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
