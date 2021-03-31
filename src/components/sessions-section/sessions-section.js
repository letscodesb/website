import React, { Component } from "react";
import "./sessions-section.css";

import SessionCircle from "./session-circle.js";

class SessionsSection extends Component {
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
      <div
        id="sessions-section"
        ref={this.domRef}
        className={
          this.state.visibility ? "fadeable visible" : "fadeable hidden"
        }
      >
        <SessionCircle id="circle-1" session_num="1" session="June 7 - 11" />
        <SessionCircle
          id="circle-2"
          session_num="2"
          session="June 21 - 25"
          big={true}
        />
        <SessionCircle id="circle-3" session_num="3" session="July 5 - 9" />
      </div>
    );
  }
}

export default SessionsSection;
