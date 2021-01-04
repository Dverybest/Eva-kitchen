import React from 'react';
import { Link, withRouter,useLocation } from 'react-router-dom';
import './Navlink.css'

const Navlink = () => {
    const location = useLocation();
    const paths = ['/all'];
    console.log({ location: location.pathname});

    return (
        <div className='menu-nav'>
            <ul className='navlinks container'>
                <li  ><Link className={` ${paths[0]===location.pathname?'active':''}`} to='/all'> All </Link> </li>
                <li ><Link className={` ${paths[1] === location.pathname ? 'active' : ''}`} to='/all'> Breakfast </Link> </li>
                <li ><Link className={` ${paths[2] === location.pathname ? 'active' : ''}`} to='/all'> Lunch </Link> </li>
                <li ><Link className={` ${paths[3] === location.pathname ? 'active' : ''}`} to='/all'> Dinner </Link> </li>
            </ul>
        </div>
    )
}

export default withRouter(Navlink);
