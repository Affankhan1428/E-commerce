import React from 'react'
import './Navbar.css';
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa"



function Navbar() {
  return (
    <div>
      <div className="navbar">
        <h1>SHOP.CO</h1>
        <input type="search" placeholder='Prodect search ' />
        <FaSearch className='fa' />


        <div className="set">
          <Link to="/" >Home</Link>
          <Link to="/Product">Product-Detail</Link>
          <Link to="/about" >About</Link>
          <Link to="/service" >Service</Link>

        </div>


      </div>
    </div>
  )
}

export default Navbar