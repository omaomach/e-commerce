import React from "react";
import { NavLink } from "react-router-dom";
import "../../nav.css";
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
              
                    <h1 >Ekomao</h1>
               
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <NavLink
                            className="nav-link active"
                            aria-current="page"
                            to="/components/home/home.js"
                        >
                            Home
                        </NavLink>
                        <NavLink className="nav-link" to="/components/products/prd.js">
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
                        
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;