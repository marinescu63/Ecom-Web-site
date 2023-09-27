import { Link } from "react-router-dom"
import React from "react";
import "./navbar.css"


function Navbar(){
    return ( 
    <div>
    <nav className="nav">
        <Link to="/" className="site-title" id="title">ECOMERCE</Link>
            <ul>
                <li>
                <Link to="/about">ABOUT</Link>
                <Link to="/">Shop</Link>
                <Link className="cart" to="/cart"> 🛒</Link>
                </li>
            </ul>
        </nav>
        </div>
    )
}

export default Navbar;