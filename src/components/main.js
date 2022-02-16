import "./main.css";
import "../fonts.css";
import React from "react";
import ReactGA from "react-ga";

// Components
import Header from "./header/header.js";
import TeamSection from "./team-section/team-section.js";
import CurriculumSection from "./curriculum-section/curriculum";
import MissionStatementSection from "./mission-statement-section/mission-statement-section";
import SessionsSection from "./sessions-section/sessions-section";
import ScheduleSection from "./schedule-section/schedule";
import SignupSection from "./signup-section/signup-section";
import ContactSection from "./contact-section/contact";
import Popup from "./popup/popup"; 
import LanguageContext from "./../contexts/LanguageContext";

class MainPage extends React.Component {
  render() {
    let lang = "english";
    ReactGA.initialize("G-Y0CNCDC2XQ");
    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
      <html>
        <head></head>
        <body>
          <div id="wrapper">
            <LanguageContext.Provider value={lang}>
              {/*<Popup/> Remove for now, you can't close it. */}
              <Header />
              <TeamSection />
              <CurriculumSection />
              <MissionStatementSection />
              <SessionsSection />
              <ScheduleSection />
              <SignupSection />
              <ContactSection />
            </LanguageContext.Provider>
          </div>

          <div id='flip-phone'>
            <h1> Please rotate your phone to portrait mode. </h1>
          </div>

         
        </body>
      </html>

      
    );
  }
}

export default MainPage;
