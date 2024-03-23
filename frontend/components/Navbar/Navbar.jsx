import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [showProgramDropdown, setShowProgramDropdown] = useState(false);
  const [sidebarOpened, setSidebarOpened] = useState(false);

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
        <div
          className="ham"
          onClick={() => {
            const sidebar = document.querySelector(".sidebar");
            sidebar.style.display = "flex";
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </div>
        <ul className="nav-links upper">
          <li
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/about">AboutUs</Link>
          </li>
          <li
            className="dropdown"
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
                <Link to="/program3">Multilingual Education</Link>
                <Link to="/program4">Teacher Training Programs</Link>
                <Link to="/program3">3D Learning Program</Link>
              </div>
            )}
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/blogs">Blog&Press</Link>
          </li>
          <li>
            <Link to="/contact">ContactUs</Link>
          </li>
        </ul>
      </nav>
      <nav className={`navbar sidebar ${sidebarOpened ? "opened" : ""}`}>
        <ul className="nav-links">
          <li
            className="close"
            onClick={() => {
              setSidebarOpened(!sidebarOpened);
              const sidebar = document.querySelector(".sidebar");
              sidebar.style.display = "none";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/program"
              onClick={() => {
                console.log(showProgramDropdown);
                setShowProgramDropdown(!showProgramDropdown);
              }}
            >
              Programs
            </Link>
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
