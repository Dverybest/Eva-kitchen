import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, withRouter, useLocation } from "react-router-dom";
import Logo from "./EvaKitchen.png";
import "./Navbar.css";

const Navbar = (props) => {
  const [className, setClassName] = useState("NavBar");
  const location = useLocation();
  const paths = ["/", "/menu", "/about", "/contact-us", "account", "checkout"];

  const handleClick = () => {
    setClassName("NavBar-mobile");
    if (className === "NavBar-mobile") {
      setClassName("NavBar");
    }
  };
  const cartCount = useSelector((state) => state.cart.cartCount);
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
                className={`navLink ${
                  paths[0] === location.pathname ? "active" : ""
                }`}
                to="/"
              >
                {" "}
                Home{" "}
              </Link>{" "}
            </li>
            <li>
              <Link
                className={`navLink ${
                  paths[1] === location.pathname ? "active" : ""
                }`}
                to="/menu"
              >
                {" "}
                Menu{" "}
              </Link>{" "}
            </li>
            <li>
              <Link
                className={`navLink ${
                  paths[2] === location.pathname ? "active" : ""
                }`}
                to="/about"
              >
                {" "}
                About Us{" "}
              </Link>{" "}
            </li>
            <li>
              <Link
                className={`navLink ${
                  paths[3] === location.pathname ? "active" : ""
                }`}
                to="/contact-us"
              >
                {" "}
                Contact Us{" "}
              </Link>{" "}
            </li>
          </ul>
        </div>
        <ul className={`secondary ${className}`}>
          <li>
            <div class="dropdown">
              <Link
                className={`navLink ${
                  paths[4] === location.pathname ? "active" : ""
                }`}
                to="/"
              >
                {" "}
                Account{" "}
                <i style={{ marginLeft: 10 }} className="fa fa-caret-down"></i>
              </Link>
              <div class="dropdown-content">
                <Link to="/">Sign In</Link>
              </div>
            </div>
          </li>
          <li>
            <Link
              className={`navLink ${
                paths[5] === location.pathname ? "active" : ""
              }`}
              to="/checkout"
            >
              {" "}
              <i
                style={{ marginRight: 10 }}
                className="fa fa-shopping-bag"
                aria-hidden="true"
              ></i>
              {`${cartCount} items`}{" "}
            </Link>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
