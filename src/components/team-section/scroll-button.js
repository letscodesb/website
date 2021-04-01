import React, { Component } from "react";
import "./scroll-button.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default class ScrollButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.scroll = this.scroll.bind(this);
  }

  scroll(increment, max, time) {
    var scrollAmount = 0;
    var slideTimer = setInterval(
      function () {
        this.props.slider.scrollLeft += increment;
        scrollAmount += increment;
        if (Math.abs(scrollAmount) >= Math.abs(max)) {
          window.clearInterval(slideTimer);
        } else if (
          this.props.slider.scrollLeft == 0 ||
          this.props.slider.scrollRight == 0
        ) {
          window.clearInterval(slideTimer);
        }
      }.bind(this),
      time
    );
  }
  handleClick(e) {
    if (this.props.rightDirection) {
      this.scroll(5, 350, 0.3);
    } else if (this.props.leftDirection) {
      this.scroll(-5, -350, 0.3);
    }
  }
  render() {
    var img;
    if (this.props.rightDirection) {
      img = <FontAwesomeIcon className="arrow-icon" icon={faChevronRight} />;
    } else if (this.props.leftDirection) {
      img = <FontAwesomeIcon className="arrow-icon" icon={faChevronLeft} />;
    }
    return (
      <div className="scrollButtonWrapper" onClick={this.handleClick}>
        {img}
      </div>
    );
  }
}
