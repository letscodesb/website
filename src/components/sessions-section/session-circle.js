import React, { Component } from "react";
import "./session-circle.css";

class SessionCircle extends Component {
  constructor(props) {
    super(props);

    // Dynamic styling allows me to reuse the component for the big circle
    var style = {};
    if (this.props.scale) {
      style.transform = "scale(" + this.props.scale + ") translateY(-10%)";
    } else {
      style.transform = "scale(1)";
    }
    this.state = { style };
  }

  render() {
    console.log(this.state.style);
    return (
      <div className="session-circle" style={this.state.style} >
        <div className="session-circle-content-wrapper">
          <h1 className="session-circle-header">{this.props.session}</h1>
          <h2 className="session-circle-desc">
            Session {this.props.session_num}
          </h2>
        </div>
      </div>
    );
  }
}

export default SessionCircle;
