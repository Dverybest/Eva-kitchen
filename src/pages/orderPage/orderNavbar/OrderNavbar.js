import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter,useLocation } from 'react-router-dom'
import { addToCartAction } from '../../../reduxSetup/actions/orderMenuAction'
import Logo from './EvaKitchen.png'
import './OrderNavbar.css'

const HeaderNavbar = (props) => {
    console.log(props, "nav Props");
    const [className, setClassName] = useState('NavBar');
    const location = useLocation();
    const paths = ['/', '/menu', '/about','/contact-us'];
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
                <li ><Link className={`navLink ${paths[3] === location.pathname ? 'active' : ''}`} to='/contact-us'> Contact Us </Link> </li>
                <div className="shoppingCart">
                    <span><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                    <small className="cartCount">{props.cartCount}</small>
                </div>
            </ul>

        </nav>
    )
}
const mapStateToProps = (state)=>{
    console.log(state.addItem.cartCount, "jdhhksd");
    return{
        addToCart: state.addItem.addToCart,
        cartCount: state.addItem.cartCount
    }
}
const connector = connect(mapStateToProps, {addToCartAction, })

export default  connector(HeaderNavbar);
