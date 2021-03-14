import "./main.css";
import "../fonts.css";
import React from "react";

// Components
import Header from "./header/header.js";
import TeamSection from "./team-section/team-section.js";
import CurriculumSection from "./curriculum-section/curriculum";
import MissionStatementSection from "./mission-statement-section/mission-statement-section";
import SessionsSection from "./sessions-section/sessions-section";

class MainPage extends React.Component {
  render() {
    console.log("Page up and running");

    return (
      <div id="wrapper">
        <Header />
        <TeamSection />
        <CurriculumSection />
        <MissionStatementSection />
        <SessionsSection />
      </div>
    );
  }
}

export default MainPage;
