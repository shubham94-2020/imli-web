import React from 'react'
import "./footer.css"
function footer() {
  return (
    <footer class="footer">
      <ul class="menu">
        <li class="menu__item">
          <a class="menu__link" href="#">
            Recent Posts
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            Programs
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="/contact">
            Contact Us
          </a>
        </li>
      </ul>
      <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
    </footer>
  );
}

export default footer
