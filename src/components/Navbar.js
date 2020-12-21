import React, { useState } from 'react'
import {Link,withRouter} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [className, setClassName] = useState('NavBar');
    
    const handleClick = () =>{
       
        setClassName('NavBar-mobile')
        if(className === 'NavBar-mobile'){
            setClassName('NavBar')
        }
    }
    
    
    return (
        <nav>
            <div className=' nav'>
                <a href='/' className='brand'>Eva <span>Kitchen</span></a>

                <button className='hamburger' onClick={handleClick}>
                        <i className='fa fa-bars'></i>
                </button>
                <ul className= {className}>
                    <li ><Link className='navLink active' to='/'> Home </Link> </li>
                    <li ><Link className='navLink' to='/menu'> Menu </Link> </li>
                    <li ><Link className='navLink' to='/about'> About Us </Link> </li>
                    <li ><Link className='navLink' to='/contact'> Contact Us </Link> </li>
                    
                </ul>
            </div>
        </nav>

    )
}

export default withRouter(Navbar)
