import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link, withRouter, useLocation } from "react-router-dom";
import { logOutAction } from "../../reduxSetup/actions/authAction";
import Logo from "./EvaKitchen.png";
import "./Navbar.css";

const Navbar = (props) => {
  const { cart: { cartCount }, auth } = useSelector((state) => state);
  const [className, setClassName] = useState("NavBar");
  const location = useLocation();
  const dispatch = useDispatch()
  const paths = ["/", "/menu", "/about", "/contact-us", "account", "checkout"];

  const handleClick = () => {
    setClassName("NavBar-mobile");
    if (className === "NavBar-mobile") {
      setClassName("NavBar");
    }
  };
  const handleLogOut = (e)=>{
      e.preventDefault();
      dispatch(logOutAction())
  }
  return (
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
                onClick={e=>e.preventDefault()}
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
                      <Link to="/">Sign In</Link>
                      <Link to="/">Sign Up</Link>
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
  );
};

export default withRouter(Navbar);
