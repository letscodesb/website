import React, { Component } from "react";
import { withTranslation } from "react-i18next";

import "./header.css";

import HamburgerMenu from "./hamburger.js";

class Header extends Component {
  constructor(props) {
    super(props);
    this.domRef = React.createRef();

    this.state = {
      visibility: false,
    };
  }

  componentDidMount() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) =>
        this.setState({ visibility: entry.isIntersecting })
      );
    });
    observer.observe(this.domRef.current);
  }

  render() {
    const t = this.props.t;
    return (
      <div id="header-section">
        <div
          id="logo"
          className={
            this.state.visibility ? " visible" : " hidden"
          }
        ></div>
        <HamburgerMenu id="hamburger-menu" />
        <div
          id="camp-description-section"
          className={
            this.state.visibility ? " visible" : " hidden"
          }
        >
          <p id="camp-description-text" ref={this.domRef}>{t('header-description')}</p>
        </div>
      </div>
    );
  }
}
export default withTranslation()(Header);
