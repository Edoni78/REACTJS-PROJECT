import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'




const Navbar = () => {

    const toggleNav = () => {
        const hamburger = document.querySelector('.hamburger-menu');

        hamburger.addEventListener("click", () => {
   
        const navLink = document.getElementById("nav-links");

        if(navLink.style.display === "none"){
        navLink.style.display = "flex";
        }else{
        navLink.style.display = "none";
        }
})
    }

  return (
   <>
      <div className="navbar">
        <Link to='/' className="nav-logo">
            <div className="logo"></div>
            <h1>LANGUAGEKOS</h1>
        </Link>

        <div id='nav-links'  className="nav-links">
            <Link to='/'>Home</Link>
            <Link to='/'>Company</Link>
            <Link to='/'>Courses</Link>
            <Link to='/'>Teachers</Link>
            <Link to='/'>Shop</Link>
            <Link to='/'>Blog</Link>
            <Link to='/'>Contact Us</Link>
        </div>

        <div className="nav-right">
            <div className="nav-icon"></div>
            <Link to='/' className="login">Log In</Link>
            <Link to='/' className="register">Register</Link>
        </div>
        <div className="hamburger-menu" onClick={toggleNav}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    </div>
   </>


  )
}

export default Navbar