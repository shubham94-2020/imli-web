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

          <img
            className="home"
            src="./imlilogo.png"
            alt="Logo"
            onClick={() => {
              window.location.href = "/";
            }}
            style={{marginLeft:'1rem'
            }}
          />

          <span>Institute for Multi-Lingual Education</span>
        </div>
        <ul className="nav-links">
          
          <li
            className="dropdown"
            onMouseEnter={toggleProgramDropdown}
            onMouseLeave={toggleProgramDropdown}
          >
            <li>
              <Link>About us</Link>
            </li>
            {showProgramDropdown && (
              <div className="dropdown-content">
                <Link to="/about">Who we are</Link>
                <Link to="/program2">Meet our team</Link>
              </div>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={toggleProgramDropdown}
            onMouseLeave={toggleProgramDropdown}
          >
            <li>
              <Link to="/program">Programs</Link>
            </li>
            {showProgramDropdown && (
              <div className="dropdown-content">
                <Link to="/program1"> Preschool Initiative</Link>
                <Link to="/program2"> Reading Programs</Link>
                <Link to="/program3">	 Multi-Lingual Hub</Link>
                <Link to="/program4"> Teacher Training Programs</Link>
                <Link to="/program3"> 3D Learning Program </Link>
              </div>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={toggleProgramDropdown}
            onMouseLeave={toggleProgramDropdown}
          >
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            {showProgramDropdown && (
              <div className="dropdown-content">
                <Link to="/program1">Video</Link>
                <Link to="/program2">Document </Link>
                <Link to="/program3">PPTs</Link>
                
              </div>
            )}
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
