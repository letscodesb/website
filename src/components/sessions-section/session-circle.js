import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import "./session-circle.css";

class SessionCircle extends Component {
  constructor(props) {
    super(props);

    // Dynamic styling allows me to reuse the component for the big circle
    //var style = {};
    /*
    if (this.props.scale) {
      style.transform = "scale(" + this.props.scale + ") translateY(-10%)";
    } else {
      style.transform = "scale(1)";
    }
    */
  }

  render() {
    var classString = "session-circle";

    if (this.props.big) {
      classString += " big-circle";
    }

    const t = this.props.t;

    var sessionString = "";

    if(this.props.session_num == 1){
      sessionString = t('session-1-desc');
    }else if(this.props.session_num == 2){
      sessionString = t('session-2-desc');
    }else if(this.props.session_num == 3){
      sessionString = t('session-3-desc');
    }


    return (
      <div className={classString}>
        <div className="session-circle-content-wrapper">
          <h1 className="session-circle-header">{this.props.session}</h1>
          <h2 className="session-circle-desc">
            {sessionString}
          </h2>
        </div>
      </div>
    );
  }
}

export default withTranslation()(SessionCircle);
