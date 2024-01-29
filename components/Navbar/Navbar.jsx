import React from "react";
import './navbar.css';
import {Link} from 'react-router-dom'
import Contact from "../Contact/Contact";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img className="home" src="./imlilogo.png" alt="Logo" />
          <span onClick={()=>{
            window.location.href = "/";
          }}>Institute for Multi- Lingual Education</span>
        </div>
        <ul className="nav-links">
          <li> <Link to="/product"> product </Link> </li>
          <li> <Link to="/about"> about us </Link> </li>
          <li> <Link to="/program"> programs </Link> </li>
          <li> <Link to="/resources"> Resources </Link> </li>
          <li> <Link to="/blogs"> Blog & press </Link> </li>
          <li> <a href="/contact"> Contact Us </a> </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
