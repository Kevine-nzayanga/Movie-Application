import React from "react";
import { useState } from "react";
import './style.css'
const Navbar = ({onSearch}) => {
        const [searchValue, setSearchValue] = useState("");
        const handleInput = (event) => {
          setSearchValue(event.target.value);
          console.log("I am typing", event.target.value);
        };
        const handleSearchClick = () => {
          console.log("I am searching", searchValue);
          onSearch(searchValue)
        };

   return (
       <div className="Navbar">
           <nav className="nav">
                <div>
                    <h1 className="logo">M<span>oo</span>vie</h1>
                </div>

                <div className="search">
                    <input
                    value={searchValue}
                    onChange={handleInput}
                    type="text" placeholder="Search" />
                     <button onClick={handleSearchClick}className="bar">search</button>
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