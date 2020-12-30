import React, { useState } from 'react'
import { Link, withRouter,useLocation } from 'react-router-dom'
import Logo from './EvaKitchen.png'
import './Navbar.css'

const Navbar = () => {
    const [className, setClassName] = useState('NavBar');
    const location = useLocation();
    const paths = ['/', '/menu', '/about','/contact-us'];
    console.log({ location: location.pathname});
    const handleClick = () => {

        setClassName('NavBar-mobile')
        if (className === 'NavBar-mobile') {
            setClassName('NavBar')
        }
    }


    return (
        <nav className='nav'>
            <a href='/' className='brand'><img src={Logo} alt='' /></a>
            <button className='hamburger' onClick={handleClick}>
                <i className='fa fa-bars'></i>
            </button>
            <ul className={className}>
                <li ><Link className={`navLink ${paths[0]===location.pathname?'active':''}`} to='/'> Home </Link> </li>
                <li ><Link className={`navLink ${paths[1] === location.pathname ? 'active' : ''}`} to='/menu'> Menu </Link> </li>
                <li ><Link className={`navLink ${paths[2] === location.pathname ? 'active' : ''}`} to='/about'> About Us </Link> </li>
                <li ><Link className={`navLink ${paths[3] === location.pathname ? 'active' : ''}`} to='/contact'> Contact Us </Link> </li>
            </ul>
        </nav>
    )
}

export default withRouter(Navbar)
