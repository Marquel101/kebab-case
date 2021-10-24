import React, { useState } from 'react'
import Button from './button'
import { Link } from 'react-router-dom'
import Dropdown from './dropdown'
import './Navbar.css'

const Navbar = () => {
return (
    <> 
    <nav classname='navbar'>
        <Link to='/' classname='navbar-logo'>
            <h1>LINK</h1>
        </Link>
    </nav>
    </>
)
}
 export default Navbar