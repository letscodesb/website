import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import "./schedule.css";
import "./../../fonts.css";

import ScheduleItem from "./schedule-item";

export default withTranslation()(
  class MWScheduleSection extends Component {
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
      const t = this.props.t;
      let schedule = [
        { name: t('arrival'), time: "8:30", long: false },
        { name: t('lesson-one'), time: "9:00", long: false },
        { name: t('project-one'), time: "10:00", long: false },
        { name: t('lunch'), time: "12:00", long: false },
        { name: t('lesson-two'), time: "1:00", long: false },
        { name: t('project-two'), time: "2:00", long: false },
        { name: t('day-ends'), time: "3:30", long: true },
      ];

      let jsx_schedule = [];
      for (let s of schedule) {
        let element = (
          <ScheduleItem name={s.name} time={s.time} long={s.long} />
        );
        jsx_schedule.push(element);
      }
      return (
        <div
          id="schedule-section"
          ref={this.domRef}
          className={
            this.state.visibility ? " visible" : " hidden"
          }
        >
          <div id="schedule-section-header">
            <h1 id="schedule-section-header-text">{t('MWschedule-header')}</h1>
          </div>
          <div id="schedule-section-items">{jsx_schedule}</div>
        </div>
      );
    }
  }
);
