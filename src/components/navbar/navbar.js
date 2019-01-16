import React from 'react'
import logo from './logo.png'
import './navbar.css'

const Navbar = (props) => (
    <nav className='navbar'>
        <img 
            className='navbar__logo' 
            src={logo}
            alt='MaxMilhas'
        />
    </nav>
)

export default Navbar