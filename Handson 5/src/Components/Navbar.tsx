import React from 'react';
import { NavLink}
import logo from "../assets/Logo.png";
function Navbar() {
  return (
    <div className='navbar'>
      <img src={logo} alt="" width={180} height={30}/>
      <ul>
        <NavLink tp="/">
        <li>Home</li>
        </NavLink>
        <NavLink tp="/product">
        <li>Product</li>
        </NavLink>
        <NavLink tp="/about">
        <li>About</li>
        </NavLink>
        <NavLink tp="/contact">
        <li>Contact</li>
        </NavLink>
        <NavLink tp="/jobs">
        <li>Jobs</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Navbar
