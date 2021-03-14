import React, { Component } from "react";
import "./sessions-section.css";

import SessionCircle from "./session-circle.js";

class SessionsSection extends Component {
  render() {
    return (
      <div id="sessions-section">
        <SessionCircle id="circle-1" session_num="1" session="June 7 - 11" />
        <SessionCircle
          id="circle-2"
          session_num="2"
          session="June 21 - 25"
          scale="1.3"
        />
        <SessionCircle id="circle-3" session_num="3" session="July 5 - 9" />
      </div>
    );
  }
}

export default SessionsSection;
