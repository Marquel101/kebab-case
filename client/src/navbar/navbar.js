import React, { useState } from 'react'
import Button from './button'
import { Link } from 'react-router-dom'
import Dropdown from './dropdown'
//import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)


return (
    <> 
    <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
            <h1>LINK</h1>
        </Link>
        <div className='menu-icon' onclick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa bars'} />

        </div>
    </nav>
    </>
)
}
 export default Navbar