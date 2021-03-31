import React, { Component } from "react";
import "./hamburger.css";
import LanguageContext from "./../../contexts/LanguageContext";

class HamburgerMenu extends Component {
  static contextType = LanguageContext;

  constructor(props) {
    super(props);
    this.toggleLanguage = this.toggleLanguage.bind(this);
  }

  toggleLanguage() {
    if (this.context == "English") {
      React.createContext(["language", "Spanish"]);
    } else if (this.context == "Spanish") {
      React.createContext(["language", "English"]);
    }
  }

  render() {
    return (
      <nav role="navigation">
        <div id="menuToggleBackground">
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <a href="#header-section">
                <li>Home</li>
              </a>
              <a href="#curriculum-section">
                <li>Curriculum</li>
              </a>
              <a href="#signup-section">
                <li>Enroll</li>
              </a>
              <a href="#contact-section">
                <li>Contact</li>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default HamburgerMenu;
