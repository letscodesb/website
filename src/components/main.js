import "./main.css";
import "../fonts.css";
import React from "react";
import ReactGA from "react-ga";

// Components
import Header from "./header/header.js";
import TeamSection from "./team-section/team-section.js";
import PythonCurriculumSection from "./curriculum-section/python-curriculum";
import GameCurriculumSection from "./curriculum-section/game-curriculum"
import WebCurriculumSection from "./curriculum-section/web-curriculum";
import UnityCurriculumSection from "./curriculum-section/unity-curriculum";
import MissionStatementSection from "./mission-statement-section/mission-statement-section";
import SessionsSection from "./sessions-section/sessions-section";
import MWScheduleSection from "./schedule-section/MWschedule";
import THScheduleSection from "./schedule-section/THschedule";
import FScheduleSection from "./schedule-section/Fschedule";
import GoogleSignupSection from "./signup-section/googlesignup-section";
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
              
              <Header />
              <TeamSection />
              <PythonCurriculumSection/>
              <GameCurriculumSection/>
              <WebCurriculumSection/>
              <UnityCurriculumSection/>
              <MissionStatementSection />
              <SessionsSection />
              <MWScheduleSection />
              <THScheduleSection/>
              <FScheduleSection/>
              <GoogleSignupSection/>
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
