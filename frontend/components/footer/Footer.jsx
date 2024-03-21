import React from "react";
import "./footer.css";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
function footer() {
  const auth = localStorage.getItem("user");
  const user = auth ? JSON.parse(auth) : null;
  const isAdmin = user && user.email === "alaknanda@gmail.com";
  return (
    <footer class="footer">
      <ul class="menu">
        <li class="menu__item">
          <a class="menu__link" href="/blogs">
            Recent Posts
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="/program">
            Programs
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="/contact">
            Contact Us
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="/login">
            Login
          </a>
        </li>
        <li class="menu__item">
        {isAdmin && (<a class="menu__link" onClick={()=>{
            localStorage.clear();
            alert("Successfully logged out")
          }}>
            Logout
          </a>)}
        </li>
      </ul>
      {/* <p>&copy;2021 Nadine Coelho | All Rights Reserved</p> */}
    </footer>
  );
}

export default footer;
