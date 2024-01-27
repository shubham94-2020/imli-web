import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [showProgramDropdown, setShowProgramDropdown] = useState(false);

  const toggleProgramDropdown = () => {
    setShowProgramDropdown(!showProgramDropdown);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img className="home" src="./imlilogo.png" alt="Logo" />
          <span
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Institute for Multi-Lingual Education
          </span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li
            className="dropdown"
            onMouseEnter={toggleProgramDropdown}
            onMouseLeave={toggleProgramDropdown}
          >
            {/* <span >Programs</span> */}
            <li>
              <Link to="/program">Program</Link>
            </li>
            {showProgramDropdown && (
              <div className="dropdown-content">
                <Link to="/program1">Program-1</Link>
                <Link to="/program2">Program 2</Link>
                <Link to="/program3">Program 3</Link>
              </div>
            )}
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/blogs">Blog & Press</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;