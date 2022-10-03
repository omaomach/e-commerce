import React from 'react';
import {NavLink} from 'react-router-dom'
function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
            <NavLink class="navbar-brand" to="#">
            <img src="https://img.icons8.com/nolan/48/warning-shield.png" width="30" class="logo"/>
            </NavLink>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
                <NavLink class="nav-link active" aria-current="page" to="/components/home/home.js">Home</NavLink>
                <NavLink class="nav-link" to="/components/products/products.js">Products</NavLink>
                <NavLink class="nav-link" to="/components/cart/cart.js">Cart</NavLink>
                <NavLink class="nav-link" to="/components/admin/admin.js">Admin</NavLink>
                <NavLink class="nav-link" to="/components/checkout/Checkout.js">Checkout</NavLink>
                <NavLink class="nav-link" to="#">
                    <img src="https://i.imgur.com/C4egmYM.jpg" class="rounded-circle" width="30" />
                </NavLink>
            </div>
            </div>
        </div>
        </nav>
)}
export default Navbar