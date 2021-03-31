import React, { Component } from "react";
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
    return (
      <div id="header-section">
        <div
          id="logo"
          className={
            this.state.visibility ? "fadeable visible" : "fadeable hidden"
          }
        ></div>
        <HamburgerMenu id="hamburger-menu" />
        <div
          id="camp-description-section"
          className={
            this.state.visibility ? "fadeable visible" : "fadeable hidden"
          }
        >
          <p id="camp-description-text" ref={this.domRef}>
            Let’s Code SBISD is a free week-long virtual coding camp during the
            summer for all SBISD middle schoolers. The course is taught in the
            Python programming language and no prior coding
            experience is needed. There are 3 sessions to choose from, and each
            student will have a very personalized experience with their
            instructor.
          </p>
        </div>
      </div>
    );
  }
}
export default Header;
