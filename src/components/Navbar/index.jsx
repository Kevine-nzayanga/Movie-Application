import React from "react";
import './style.css'
const Navbar = () => {
   return (
       <div className="Navbar">
           <nav className="nav">
                <div>
                    <h1 className="logo">M<span>oo</span>vie</h1>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="links">
                    <li>Home</li>
                    <li>About</li>
                    <li>My list</li>
                    <button>Sign in</button>
                </div>
            </nav>
       </div>
  );
}
export default Navbar;