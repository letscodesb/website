import React, { Component } from "react";
import "./curriculum.css";
import "../../fonts.css";

class CurriculumSection extends Component {
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
      <div id="curriculum-section" className={this.state.visibility ? 'fadeable visible' : 'fadeable hidden'} ref={this.domRef}>
        <h2 id="curriculum-section-header">Curriculum</h2>

        <div id="list-section">
          <ul id="curriculum-list-1" class="curriculum-list">
            <li>Variables</li>
            <li>Loops</li>
            <li>Object Oriented Programming</li>
            <li>Python Packages</li>
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
