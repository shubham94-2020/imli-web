import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [showProgramDropdown, setShowProgramDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowProgramDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowProgramDropdown(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img
            className="home"
            src="./imlilogo.png"
            alt="Logo"
            onClick={() => {
              window.location.href = "/";
            }}
            style={{ marginLeft: "1rem" }}
          />
          <span>Institute for Multilingual Education</span>
        </div>
        <ul className="nav-links">
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link>About us</Link>
            {showProgramDropdown && (
              <div
                className="dropdown-content"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/about">Who we are</Link>
                <Link to="/program2">Meet our team</Link>
              </div>
            )}
          </li>
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/program">Programs</Link>
            {showProgramDropdown && (
              <div
                className="dropdown-content"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/program1">Early Childhood Education</Link>
                <Link to="/program2">English Language Reading and Writing</Link>
                <Link to="/program3">Multilingual Hub</Link>
                <Link to="/program4">Teacher Training Programs</Link>
                <Link to="/program3">3D Learning Program</Link>
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