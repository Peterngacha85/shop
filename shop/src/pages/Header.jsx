import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './styles/header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Header = () => {
  return (
    <div className='header'>
        <div className='nav-links'>
        <Link className='links' to="/Shop">Shop</Link>
        </div>
        <div className='nav-links'>
        <Link className='links' to="/Cart"><i className="bi bi-cart"></i></Link>
        </div>
    </div>
  )
}

export default Header