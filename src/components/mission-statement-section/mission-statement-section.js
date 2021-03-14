import React, { Component } from "react";
import "./mission-statement-section.css";

class MissionStatementSection extends Component {
  render() {
    return (
      <div id="mission-statement-section">
        <h1 id="mission-statement-header">Our Mission</h1>
        <p id="mission-statement-content">
          We wanted to create coding camp for SBISD that respects the public
          health of all the students and establishes a stronger computer science
          community in the district. We believe that the best way to do this is
          to give the experience of a $100/hr coding camp with no cost at all to
          the district’s underserved students.
        </p>
      </div>
    );
  }
}

export default MissionStatementSection;
