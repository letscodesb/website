import React, { Component } from "react";
import "./curriculum.css";
import "../../fonts.css";

class CurriculumSection extends Component {
  render() {
    return (
      <div id="curriculum-section">
        <h2 id="curriculum-section-header">Curriculum</h2>

        <div id="list-section">
          <ul id="curriculum-list-1" class="curriculum-list">
            <li>Variables</li>
            <li>Loops</li>
            <li>Object Oriented Programming</li>
            <li>Packages</li>
          </ul>
          <ul id="curriculum-list-2" class="curriculum-list">
            <li>Functions</li>
            <li>Lists</li>
            <li>Algorithms</li>
            <li>Final Project</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CurriculumSection;
