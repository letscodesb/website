import React, { Component } from "react";
import TeamCard from "./card";
import ScrollButton from "./scroll-button";
import { withTranslation } from "react-i18next";

import "./team-section.css";


const noImage = require("./../../resources/team-pictures/gray.png");
const jeanImage = require("./../../resources/team-pictures/jean.jpg");

class TeamSection extends Component {
  constructor(props) {
    super(props);
    const t = this.props.t;
    let card_data = [
      {
        name: "Jean Hoang",
        title: "cards-titles-vice-president-and-lab-leader",
        bio: "cards-bios-jean",
        img: jeanImage,
        longBio: true,
      },
      {
        name: "Griffin Ferguson",
        title: "cards-titles-president-and-lab-leader",
        bio: "cards-bios-griffin",
        img: noImage,
        medBio: true,
      },
      {
        name: "Grace Abdelnour",
        title: "cards-titles-vice-president-and-lab-leader",
        bio: "cards-bios-grace",
        img: noImage,
        medBio: true,
      }
    ];

    this.state = { card_data: card_data, visibility: false };
    this.sectionRef = React.createRef();
    this.teamCardRowRef = React.createRef();
    this.buttonRowRef = React.createRef();
  }

  componentDidMount() {
    const slider = this.teamCardRowRef.current;
    const buttonRow = this.buttonRowRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;
    let isMobile;

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768){
        isMobile = false;
      }else if(window.innerWidth <= 768){
        isMobile = true;
      }
    });

    if (!isMobile) {
      // desktop
      slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
      });
      slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
      });
      slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
      });

      buttonRow.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      buttonRow.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
      });
      buttonRow.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
      });
      buttonRow.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
      });
    } else if (isMobile) {
      //mobile

      slider.addEventListener("touchstart", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.changedTouches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener("touchend", (e) => {
        isDown = false;
        slider.classList.remove("active");
      });
      slider.addEventListener("touchcancel", (e) => {
        isDown = false;

        slider.classList.remove("active");
      });
      slider.addEventListener("touchmove", (e) => {
        if (!isDown) return;
        //e.preventDefault();
        const x = e.changedTouches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 1; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        console.log(e.changedTouches)
      });

      buttonRow.addEventListener("touchstart", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.changedTouches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      buttonRow.addEventListener("touchend", () => {
        isDown = false;
        slider.classList.remove("active");
      });
      buttonRow.addEventListener("touchcancel", () => {
        isDown = false;
        slider.classList.remove("active");
      });
      buttonRow.addEventListener("touchmove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
      });
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) =>
        this.setState({ visibility: entry.isIntersecting })
      );
    });
    observer.observe(this.sectionRef.current);
  }
  render() {
    //   <ScrollMenu data={this.state.card_data}/>
    let cards = [];
    for (let data of this.state.card_data) {
      var title = "None";
      if (data.title) {
        title = data.title;
      }

      var l = false;
      if (data.longBio) {
        l = true;
      }

      var m = false;
      if (data.medBio) {
        m = true;
      }
      cards.push(
        <TeamCard
          name={data.name}
          bio={data.bio}
          img={data.img}
          title={title}
          long={l}
          medium={m}
        />
      );
    }

    const t = this.props.t;

    return (
      <div
        id="team-section"
        ref={this.sectionRef}
        className={this.state.visibility ? " visible" : " hidden"}
      >
        <h1 id="team-header-text">{t("cards-header")}</h1>
        <h2 id="team-subheader" class="mobile-only">
          {t("cards-subheader-mobile")}
        </h2>
        <div id="team-content-row">
          <div id="scroll-button-row" ref={this.buttonRowRef}>
            <ScrollButton
              leftDirection={true}
              slider={this.teamCardRowRef.current}
            />
            <ScrollButton
              rightDirection={true}
              slider={this.teamCardRowRef.current}
            />
          </div>
          <div id="team-card-row" ref={this.teamCardRowRef}>
            {cards}
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(TeamSection);
