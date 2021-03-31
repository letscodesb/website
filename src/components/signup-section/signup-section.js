import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import "./signup-section.css";

import emailjs, { init } from "emailjs-com";

const EmailValidator = require("email-validator");
const PhoneValidator = require("phone");

export default class SignupSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentPhone: "",
      parentEmail: "",
      studentFirstName: "",
      studentLastName: "",
      studentPhone: "",
      studentEmail: "",
      session: "",
      grade: "",
      visibility: false,
    };

    this.domRef = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.president_email = "devon.s.schwartz@gmail.com";
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

    var viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute(
      "content",
      viewport.content + ", height=" + window.innerHeight
    );
  }

  render() {
    return (
      <div
        id="signup-section"
        ref={this.domRef}
        className={
          this.state.visibility ? "fadeable visible" : "fadeable hidden"
        }
      >
        <div id="signup-section-header">
          <h1 id="signup-section-header-text">Enroll</h1>
          <h2 id="signup-section-header-subheader">
            You will receive a confirmation email
          </h2>
        </div>

        <div id="input-section">
          <div class="form-input-line">
            <input
              name="studentFirstName"
              id="student-first-name-input"
              class="form-input"
              placeholder="Student First Name"
              onChange={this.handleChange}
              value={this.state.studentFirstName}
            ></input>
            <input
              name="studentLastName"
              id="student-last-name-input"
              class="form-input"
              placeholder="Student Last Name"
              onChange={this.handleChange}
              value={this.state.studentLastName}
            ></input>
          </div>

          <div class="form-input-line">
            <input
              name="parentPhone"
              id="parent-phone"
              class="form-input"
              placeholder="Parent Phone Number"
              onChange={this.handleChange}
              value={this.state.parentPhone}
            ></input>
            <input
              name="parentEmail"
              id="parent-email"
              class="form-input"
              placeholder="Parent Email"
              onChange={this.handleChange}
              value={this.state.parentEmail}
            ></input>
          </div>

          <div class="form-input-line">
            <input
              name="studentPhone"
              id="student-phone"
              class="form-input"
              placeholder="Student Phone (Optional)"
              onChange={this.handleChange}
              value={this.state.studentPhone}
            ></input>
            <input
              name="studentEmail"
              id="student-email"
              class="form-input"
              placeholder="Student Email (Optional)"
              onChange={this.handleChange}
              value={this.state.studentEmail}
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
            >
              <option value="" disabled>
                Session
              </option>
              <option value="June 7-11">June 7-11</option>
              <option value="June 21-25">June 21-25</option>
              <option value="July 5-9">July 5-9</option>
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
                Grade in Fall 2021
              </option>
              <option value="6">Incoming 6th grader</option>
              <option value="7">Incoming 7th grader</option>
              <option value="8">Incoming 8th grader</option>
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
