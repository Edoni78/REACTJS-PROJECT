import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {AiFillCloseCircle} from 'react-icons/ai';


const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
  };


  return (
    <>
      <div className="navbar">
        <Link to="/" className="nav-logo">
          <div className="logo"></div>
          <h1>LANGUAGEKOS</h1>
        </Link>

        <div id="nav-links" className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/">Company</Link>
          <Link to="/">Courses</Link>
          <Link to="/">Teachers</Link>
          <Link to="/">Shop</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Contact Us</Link>
        </div>

        <div className="nav-right">
          <div className="nav-icon"></div>
          <Link to="/" className="login">
            Log In
          </Link>
          <Link to="/" className="register">
            Register
          </Link>
        </div>
        <div className="hamburger-menu" onClick={handleNav}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {openNav && (

            <div className="mob-nav">
            {/* <AiFillCloseCircle 
            className="xxx" 
            onClick={() => setOpenNav(false)}
            setOpenNav={setOpenNav}
            /> */}
               <div id="nav-links2">
            <Link to="/">Home</Link>
            <Link to="/">Company</Link>
            <Link to="/">Courses</Link>
            <Link to="/">Teachers</Link>
            <Link to="/">Shop</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Contact Us</Link>
          </div>
            </div>
       
        )}
      </div>
    </>
  );
};

export default Navbar;
