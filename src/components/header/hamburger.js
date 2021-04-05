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
    this.toggleOpen = this.toggleOpen.bind(this);
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.state = {
      open: false,
    };
  }

  toggleLanguage() {
    if (this.context == "English") {
      React.createContext(["language", "Spanish"]);
    } else if (this.context == "Spanish") {
      React.createContext(["language", "English"]);
    }
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  handleMenuOpen(e) {
    if (e.target.value == "on") {
      this.setState({ open: false });
    } else {
      this.setState({ open: true });
    }
  }

  handleLanguageChange(e) {
    let newLang = e.target.value;
    this.props.i18n.changeLanguage(newLang);
  }

  render() {
    const t = this.props.t;
    console.log(this.state.open);
    return (
      <nav role="navigation">
        <div id="menuToggleBackground" onClick={this.toggleOpen}>
          <div id="menuToggle" onChange={this.toggleOpen}>
            <input type="checkbox" checked={this.state.open} />

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
