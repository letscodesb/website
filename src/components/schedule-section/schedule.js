import React, { Component } from "react";
import "./schedule.css";
import "./../../fonts.css";

import ScheduleItem from "./schedule-item";

export default class ScheduleSection extends Component {
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
    let schedule = [
      { name: "Lesson One", time: "9:00", long: false },
      { name: "Project One", time: "10:00", long: false },
      { name: "Lunch", time: "12:00", long: false },
      { name: "Lesson Two", time: "1:00", long: false },
      { name: "Project Two", time: "2:00", long: false },
      { name: "Day Ends", time: "3:30", long: false },
      { name: "Office Hours Start", time: "4:00", long: true },
      { name: "Office Hours Ends", time: "6:00", long: true },
    ];

    let jsx_schedule = [];
    for (let s of schedule) {
      let element = <ScheduleItem name={s.name} time={s.time} long={s.long} />;
      jsx_schedule.push(element);
    }
    return (
      <div
        id="schedule-section"
        ref={this.domRef}
        className={
          this.state.visibility ? "fadeable visible" : "fadeable hidden"
        }
      >
        <div id="schedule-section-header">
          <h1 id="schedule-section-header-text">Camp Schedule</h1>
        </div>
        <div id="schedule-section-items">{jsx_schedule}</div>
      </div>
    );
  }
}
