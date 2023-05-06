import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import "./contact.css";

export default withTranslation()(
  class ContactSection extends Component {
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
          id="contact-section"
          className={
            this.state.visibility ? " visible" : " hidden"
          }
        >
          <div id="contact-section-header">
            <h1 id="contact-section-header-text">{t("contact-us")}</h1>
          </div>

          <div id="contact-section-blobs">
            <div className="contact-blob" id="contact-blob-1" ref={this.domRef}>
              <div className="blob-header-container">
                <h1 className="blob-header">Let's Code Leadership Team</h1>
                {/* <h2 className="blob-subheader">{t("president")}</h2> */}
              </div>

              <div className="info-container">
                <div className="label-col">
                  <h1 className="label" id="email-label">
                    {t("email")}
                  </h1>
                  <h1 className="label" id="phone-label">
                    {t("phone")}
                  </h1>
                </div>
                <div className="content-col">
                  <h1 className="content" id="email-content">
                    letscodesbisd@gmail.com
                  </h1>
                  <h1 className="content" id="phone-content">
                    +1-832-888-1184
                  </h1>
                </div>
              </div>
            </div>
            <div className="contact-blob" id="contact-blob-2">
              <div className="blob-header-container">
                <h1 className="blob-header">Charles "Dave" Avis</h1>
                <h2 className="blob-subheader">{t("teacher-sponsor")}</h2>
              </div>

              <div className="info-container">
                <div className="label-col">
                  <h1 className="label" id="email-label">
                    {t("email")}
                  </h1>
                  <h1 className="label" id="phone-label">
                    {t("phone")}
                  </h1>
                </div>
                <div className="content-col">
                  <h1 className="content" id="email-content">
                    charles.avis@springbranchisd.com
                  </h1>
                  <h1 className="content" id="phone-content">
                    NA
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
);
