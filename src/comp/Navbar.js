import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [fix, setFix] = useState(false);
  function setFixed() {
    if (window.scrollY >= 1) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  return (
    <div className={fix ? "header active6" : "header"}>
      <Link to="/">
        <h1 className="navbarheader">Flairup</h1>
      </Link>
      <ul className={click ? "menu active" : "menu"}>
        <li>
          <Link to="/work">Our Works</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About Us </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <h1 className="navbartext">close</h1>
        ) : (
          <h1 className="navbartext">Menu</h1>
        )}
      </div>
    </div>
  );
};

export default Navbar;
