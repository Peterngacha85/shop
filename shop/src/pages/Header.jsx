import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='nav-links'>
        <Link className='links' to="/Cart">Cart</Link>
        </div>
        <div className='nav-links'>
        <Link className='links' to="/Shop">Shop</Link>
        </div>
    </div>
  )
}

export default Header