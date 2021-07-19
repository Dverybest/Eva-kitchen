import { findAllByDisplayValue } from "@testing-library/react";
import React, { useState,useRef,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, withRouter, useLocation } from "react-router-dom";
import { logOutAction } from "../../reduxSetup/actions/authAction";
import SignIn from "../Authentication/signIn";
import SignUp from "../Authentication/signUp";
import Logo from "./EvaKitchen.png";
import "./Navbar.css";

const Navbar = (props) => {
  const { cart: { cartCount }, auth } = useSelector((state) => state);
  const [className, setClassName] = useState("NavBar");
  const location = useLocation();
  const dispatch = useDispatch()
  const [manageAuth, setmanageAuth] = useState('')
  const [ show, setShow] = useState(false)
  const paths = ["/", "/menu", "/about", "/contact-us", "account", "checkout"];
  
  const handleClick = () => {
    setClassName("NavBar-mobile");
    if (className === "NavBar-mobile") {
      setClassName("NavBar");
    }
  };
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logOutAction())
  }
  const handleModal = (e, auth)=>{
    e.preventDefault();
    setShow(true)
    setmanageAuth(auth)
  }
  return (<div d-flex flex-column>
    <nav className="nav">
      <div className={"brand"}>
        <a href="/">
          <img src={Logo} alt="" />
        </a>
        <button className="hamburger" onClick={handleClick}>
          <i className="fa fa-bars"></i>
        </button>
      </div>
      <div className={`link ${className === "NavBar" ? "NavBar" : ""}`}>
        <div className={"main"}>
          <ul className={className}>
            <li>
              <Link
                className={`navLink ${paths[0] === location.pathname ? "active" : ""
                  }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`navLink ${paths[1] === location.pathname ? "active" : ""
                  }`}
                to="/menu"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                className={`navLink ${paths[2] === location.pathname ? "active" : ""
                  }`}
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className={`navLink ${paths[3] === location.pathname ? "active" : ""
                  }`}
                to="/contact-us"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <ul className={`secondary ${className}`}>
          <li>
            <div className="dropdown">
              <Link
                className={`navLink ${paths[4] === location.pathname ? "active" : ""
                  }`}
                to="/"
                onClick={e => e.preventDefault()}
              >
                Account
                <i style={{ marginLeft: 10 }} className="fa fa-caret-down"></i>
              </Link>
              <div className="dropdown-content">
                {
                  auth.isAuthenticated ? (
                    <>
                      <Link to="/">Profile</Link>
                      <Link to="/">My Orders</Link>
                      <Link to="/" onClick={handleLogOut}>Log Out</Link>
                    </>
                  ) : (
                    <>
                      <Link onClick={e=>handleModal(e, 'signIn')}>
                        Sign In
                      </Link>
                      <Link onClick={e=>handleModal(e, 'signUp')}>Sign Up</Link>
                    </>
                  )
                }
              </div>
            </div>
          </li>
          <li>
            <Link
              className={`navLink ${paths[5] === location.pathname ? "active" : ""
                }`}
              to="/checkout"
            >

              <i
                style={{ marginRight: 10 }}
                className="fa fa-shopping-bag"
                aria-hidden="true"
              ></i>
              {`${cartCount} items`}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <div className={`modal fade ${show?'show':''} `}id="Modal" tabindex="-1"  style={{display:show? "block":'',backgroundColor:'#00000060'}} aria-modal="true" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
          <h5 class="modal-title" id="ModalLabel">Sign In</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>setShow(false)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {manageAuth === "signIn"? <SignIn setmanageAuth={setmanageAuth}/>: 
            <SignUp setmanageAuth={setmanageAuth}/>}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default withRouter(Navbar);
