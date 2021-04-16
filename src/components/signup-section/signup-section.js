import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import "./signup-section.css";

import emailjs, { init } from "emailjs-com";

const EmailValidator = require("email-validator");
const PhoneValidator = require("phone");

export default withTranslation()(
  class SignupSection extends Component {
    constructor(props) {
      super(props);
      this.state = {
        parentPhone: "",
        parentEmail: "",
        parentFirstName: "",
        studentFirstName: "",
        studentLastName: "",
        studentPhone: "",
        studentEmail: "",
        session: "",
        grade: "",
        visibility: true,
      };

      this.domRef = React.createRef();
      this.inputElement = React.createRef();

      this.handleTouchStart = this.handleTouchStart.bind(this);
      this.handleInputFocus = this.handleInputFocus.bind(this);
      this.handleInputBlur = this.handleInputBlur.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.resetForm = this.resetForm.bind(this);
      this.president_email = "devon.s.schwartz@gmail.com";
    }

    componentWillMount() {
      //React.initializeTouchEvents(true);
    }

    handleChange(event) {
      let val = event.target.value;
      let name = event.target.name;

      this.setState({
        [name]: val,
      });
    }
    async handleSubmit() {
      let emailValid = EmailValidator.validate(this.state.parentEmail); // check if email is valid
      let phoneValid = PhoneValidator(this.state.parentPhone, "USA")[0] !== []; // check if phone is valid

      if (!emailValid) {
        // email invalid
        alert("Invalid Parent Email.");
      } else if (!phoneValid) {
        // phone invalid
        alert("Invalid Parent Phone Number.");
      } else if (
        this.state.studentFirstName.trim() !== "" &&
        this.state.studentLastName.trim() !== "" &&
        this.state.session !== "" &&
        this.state.grade !== ""
      ) {
        // everything valid
        init("user_YBpRorjZEvbNZJHncpFNS");
        emailjs
          .send("service_35mr7ho", "template_m93s71y", {
            firstName: this.state.studentFirstName,
            lastName: this.state.studentLastName,
            session: this.state.session,
            toEmail: this.state.parentEmail,
          })
          .then(
            (result) => {
              emailjs
                .send("service_35mr7ho", "template_7u2wp7s", {
                  parentFirstName: this.state.parentFirstName,
                  studentFirstName: this.state.studentFirstName,
                  studentLastName: this.state.studentLastName,
                  session: this.state.session,
                  grade: this.state.grade,
                  parentEmail: this.state.parentEmail,
                  parentPhone: this.state.parentPhone,
                  studentEmail: this.state.studentEmail,
                  studentPhone: this.state.studentPhone,
                  toEmail: this.president_email,
                })
                .then(
                  (result) => {
                    alert("Enrollment complete!");
                    this.resetForm();
                  },
                  (error) => {
                    console.log(error.text);
                  }
                );
            },
            (error) => {
              console.log(error.text);
            }
          );
      } else {
        // necessary field is blank
        alert("Not all necessary fields filled.");
      }
      // Reset form variables
    }

    resetForm() {
      this.setState({
        parentFirstName: "",
        parentPhone: "",
        parentEmail: "",
        studentFirstName: "",
        studentLastName: "",
        studentPhone: "",
        studentEmail: "",
        session: "",
        grade: "",
      });
    }

    componentDidMount() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) =>
          this.setState({ visibility: entry.isIntersecting })
        );
      });
      observer.observe(this.domRef.current);
    }

    handleInputFocus(e) {}

    handleInputBlur(e) {
      e.preventDefault();
      e.nativeEvent.preventDefault();
    }

    handleTouchStart(e) {
      e.preventDefault();
      e.nativeEvent.preventDefault();
    }

    render() {
      const t = this.props.t;
      return (
        <div
          id="signup-section"
          ref={this.domRef}
          className={
            this.state.visibility ? "fadeable visible" : "fadeable hidden"
          }
        >
          <div id="signup-section-header">
            <h1 id="signup-section-header-text">{t("enroll-header")}</h1>
            <h2 id="signup-section-header-subheader">
              {t("enroll-subheader")}
            </h2>
          </div>

          <div id="input-section">
            <div class="form-input-line">
              <input
                name="parentFirstName"
                id="parent-first-name-input"
                class="form-input"
                placeholder={t("enroll-parent-first-name")}
                onChange={this.handleChange}
                value={this.state.parentFirstName}
                ref={this.inputElement}
                onFocusIn={this.handleTouchStart}
                onBlur={this.handleInputBlur}
                onFocus={this.handleTouchStart}
              ></input>
            </div>
            <div class="form-input-line">
              <input
                name="studentFirstName"
                id="student-first-name-input"
                class="form-input"
                placeholder={t("enroll-student-first-name")}
                onChange={this.handleChange}
                value={this.state.studentFirstName}
                ref={this.inputElement}
                onFocusIn={this.handleTouchStart}
                onBlur={this.handleInputBlur}
                onFocus={this.handleTouchStart}
              ></input>
              <input
                name="studentLastName"
                id="student-last-name-input"
                class="form-input"
                placeholder={t("enroll-student-last-name")}
                onChange={this.handleChange}
                value={this.state.studentLastName}
                ref={this.inputElement}
                onFocusIn={this.handleTouchStart}
                onBlur={this.handleInputBlur}
                autoFocus={false}
                onFocus={this.handleTouchStart}
              ></input>
            </div>

            <div class="form-input-line">
              <input
                name="parentPhone"
                id="parent-phone"
                class="form-input"
                placeholder={t("enroll-parent-phone-number")}
                onChange={this.handleChange}
                value={this.state.parentPhone}
                ref={this.inputElement}
                onFocusIn={this.handleTouchStart}
                onBlur={this.handleInputBlur}
                autoFocus={false}
                onFocus={this.handleTouchStart}
              ></input>
              <input
                name="parentEmail"
                id="parent-email"
                class="form-input"
                placeholder={t("enroll-parent-email")}
                onChange={this.handleChange}
                value={this.state.parentEmail}
                ref={this.inputElement}
                onFocusIn={this.handleTouchStart}
                onBlur={this.handleInputBlur}
                autoFocus={false}
                onFocus={this.handleTouchStart}
              ></input>
            </div>

            <div class="form-input-line">
              <input
                name="studentPhone"
                id="student-phone"
                class="form-input"
                placeholder={t("enroll-student-phone")}
                onChange={this.handleChange}
                value={this.state.studentPhone}
                ref={this.inputElement}
                onFocusIn={this.handleTouchStart}
                onBlur={this.handleInputBlur}
                autoFocus={false}
                onFocus={this.handleTouchStart}
              ></input>
              <input
                name="studentEmail"
                id="student-email"
                class="form-input"
                placeholder={t("enroll-student-email")}
                onChange={this.handleChange}
                value={this.state.studentEmail}
                ref={this.inputElement}
                onFocusIn={this.handleTouchStart}
                onBlur={this.handleInputBlur}
                autoFocus={false}
                onFocus={this.handleTouchStart}
              ></input>
            </div>
            <div class="form-input-line option-line" id="first-select-line">
              <select
                name="session"
                id="student-session"
                class="form-input"
                placeholder="Session"
                onChange={this.handleChange}
                value={this.state.session}
                autoFocus={false}
              >
                <option value="" disabled>
                  {t("session-header")}
                </option>
                <option value="June 7-11">{t("session-1")}</option>
                <option value="June 21-25">{t("session-2")}</option>
                <option value="July 5-9">{t("session-3")}</option>
              </select>
            </div>

            <div class="form-input-line option-line">
              <select
                name="grade"
                id="student-grade"
                class="form-input"
                placeholder="Grade in Fall 2021"
                onChange={this.handleChange}
                value={this.state.grade}
              >
                <option value="" disabled>
                  {t("grade-header")}
                </option>
                <option value="6">{t("incoming-6")}</option>
                <option value="7">{t("incoming-7")}</option>
                <option value="8">{t("incoming-8")}</option>
              </select>
            </div>
          </div>

          <div id="button-section">
            <div id="submit-button" onClick={this.handleSubmit}>
              <FontAwesomeIcon id="arrow-icon" icon={faAngleDoubleRight} />
            </div>
          </div>
        </div>
      );
    }
  }
);
