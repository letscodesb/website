import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import "./hamburger.css";
import LanguageContext from "./../../contexts/LanguageContext";

class HamburgerMenu extends Component {
  static contextType = LanguageContext;

  constructor(props) {
    super(props);
    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  toggleLanguage() {
    if (this.context == "English") {
      React.createContext(["language", "Spanish"]);
    } else if (this.context == "Spanish") {
      React.createContext(["language", "English"]);
    }
  }

  handleLanguageChange(e) {
    let newLang = e.target.value;
    this.props.i18n.changeLanguage(newLang);
  }

  render() {
    const t = this.props.t;
    return (
      <nav role="navigation">
        <div id="menuToggleBackground">
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <li>
                <a href="#header-section">{t("hamburger-home")}</a>
              </li>
              <li>
                <a href="#curriculum-section">{t("hamburger-curriculum")}</a>
              </li>
              <li>
                <a href="#signup-section">{t("hamburger-enroll")}</a>
              </li>
              <li>
                <a href="#contact-section">{t("hamburger-contact")}</a>
              </li>
              <li>
                <select id="languageMenu" onChange={this.handleLanguageChange}>
                  <option value="en">English</option>
                  <option value="es">Español</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default withTranslation()(HamburgerMenu);
