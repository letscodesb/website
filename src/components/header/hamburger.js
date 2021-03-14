import React, { Component } from "react";
import "./hamburger.css";

class HamburgerMenu extends Component {
  render() {
    return (
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>Mission Statement</li>
            </a>
            <a href="#">
              <li>Enroll</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
            <a href="#" target="_blank">
              <li>Show me more</li>
            </a>
          </ul>
        </div>
      </nav>
    );
  }
}

export default HamburgerMenu;
