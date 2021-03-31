import React, { Component } from "react";
import "./schedule-item.css";
import "./../../fonts.css";

export default class ScheduleItem extends Component {
  render() {
    var className = "schedule-item-name";
    if (this.props.long) {
      className += " long";
    }
    return (
      <div className="schedule-item">
        <p className={className}>{this.props.name}</p>
        <div className="schedule-item-bubble">
          <p className="schedule-item-time">{this.props.time}</p>
        </div>
      </div>
    );
  }
}
