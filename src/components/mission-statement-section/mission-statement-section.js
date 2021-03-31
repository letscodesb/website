import React, { Component } from "react";
import "./mission-statement-section.css";

class MissionStatementSection extends Component {
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
      <div id="mission-statement-section" className={this.state.visibility ? 'fadeable visible' : 'fadeable hidden'} >
        <h1 id="mission-statement-header">Our Mission</h1>
        <p id="mission-statement-content" ref={this.domRef}>
          We wanted to create coding camp for SBISD that respects the public
          health of all the students and establishes a stronger computer science
          community in the district. We believe that the best way to do this is
          to give the experience of a premium coding camp with no cost at all to
          the district’s underserved students.
        </p>
      </div>
    );
  }
}

export default MissionStatementSection;
