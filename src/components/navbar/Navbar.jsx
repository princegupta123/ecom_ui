import React from 'react'
import "./navbar.css";
const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='wrapper'>
    <div className='left'>
        <img src="/images/logo.png" alt="logo" className='logo'/>
    </div>
    <div className="center">
        <div className="search">
            <input type="text" placeholder='Search your products...' className='input'/>
        </div>
    </div>
    <div className="right">
        <span>User</span>
        <span>Cart</span>
        <span>My Orders</span>
    </div>
    </div>
    </div>
  )
}

export default Navbar