import React, { Component } from "react";
import { withTranslation } from "react-i18next";
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
    const t = this.props.t;
    return (
      <div
        id="mission-statement-section"
        className={
          this.state.visibility ? "fadeable visible" : "fadeable hidden"
        }
      >
        <h1 id="mission-statement-header">{t("mission-header")}</h1>
        <p id="mission-statement-content" ref={this.domRef}>{t('mission-statement')}</p>
      </div>
    );
  }
}

export default withTranslation()(MissionStatementSection);
