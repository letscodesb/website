import React, { Component } from "react";
import TeamCard from "./card";

import "./team-section.css";

const devonImage = require("./../../resources/team-pictures/devon.png");
const annieImage = require("./../../resources/team-pictures/annie.jpeg");
const jeanImage = require("./../../resources/team-pictures/jean.jpg");
const josephImage = require("./../../resources/team-pictures/joseph.jpg");
const neilImage = require("./../../resources/team-pictures/neil.jpg");
const noImage = require("./../../resources/team-pictures/lightGray.png");

class TeamSection extends Component {
  constructor(props) {
    super(props);
    let card_data = [
      {
        name: "Devon Schwartz",
        title: "President and Lab Leader",
        bio:
          "Devon Schwartz is a rising senior at Stratford High School. He plans to pursue computer science and artificial intelligence when he enters college and has been programming for 3 years. He currently works as an instructor at Code Ninjas alongside Neil Aylor, where he teaches kids in elementary and middle school how to program. Outside of programming and school, he is a member of the Stratford debate team and Stratford playhouse. He also loves cooking and road cycling. ",
        img: devonImage,
        medBio: true,
      },
      {
        name: "Neil Aylor",
        title: "Vice President and Lab Leader",
        bio: "Neil Aylor is a rising senior at Stratford High School. He plans to persue artifical intelligence and data science and has been programming for 6 years. He teaches code to elementary and middle schoolers at CodeNinjas with Devon, and is involved in theater and the debate team as well as being president of both Statford's Computer Science Club and Chess Club. He also wrote all the code for the website you're reading this on!",
        img: neilImage,
      },
      {
        name: "Jean Hoang",
        title: "Head of Communications and Lab Leader",
        bio:
          "Jean Hoang is a rising junior at Stratford High School and the Spring Branch Academic Institute, a program for academically gifted students. She plans to pursue computer science and artificial intelligence when she enters college. She has been programming for 7 years and has developed a website for her parents’ dental practice, Dental Suite Pa. Jean also worked with an AI4All summer camp hosted by Stanford University, which focussed primarily on computational biology. Outside of programming and school, Jean practices Chinese martial arts. She also loves to read, watch K-Dramas and anime, and listen to K-Pop.",
        img: jeanImage,
        longBio: true,
      },
      {
        name: "Bryce Elphingstone",
        title: "Lab Leader",
        bio:
          "Bryce Elphingstone is a rising college freshman at Texas A&M, where he will be pursuing General Engineering. He has been programming for 7 years and is currently working on making a game of chess that is powered by artificial intelligence that uses data from players on the Internet. Outside of programming and school, his interests include chemistry and playing video games. He is also a member of the Stratford High School band.",
        img: noImage,
      },
      {
        name: "Joseph Buldoc",
        title: "Lab Leader",
        bio:
          "Joseph Buldoc is a rising senior at Stratford High School. He plans to pursue Computer Science and Engineering when he enters college and has been programming for 4 years. Outside of programming and school, Joseph enjoys creating deepfakes, 3D printing, and playing chess.",
        img: josephImage,
      },
      {
        name: "William Wu",
        title: "Office-Hour Instructor",
        bio:
          "William Wu is a rising junior at Stratford High School. He plans to pursue a STEM-related career that involves computer science. Though William has been programming from a very young age, he started taking programming seriously in 6th grade. Outside of school, William is interested in robotics, which he competed in in middle. He is also interested in marine biology and he draws in his free time.",
        img: noImage,
      },
      {
        name: "Karina Hartman",
        title: "Lab Leader",
        bio:
          "Karina Hartman is a rising senior at Stratford High School. She plans to pursue a career in digital art and computer science. She has been programming for 5 years. She started programming for her middle school robotics team, and then took 2 years of computer science in high school. In her free time, Karina likes to draw and play video games.",
        img: noImage,
      },
      {
        name: "Erik Rankin",
        title: "Lab Leader",
        bio:
          "Erik Rankin is a rising junior at Stratford High School. He plans to pursue a STEM-related career. He has been programming for 6 years, primarily making mods for Minecraft and Hearts of Iron 4. Outside of school and programming, his interests include playing video games and filmmaking.",
        img: noImage,
      },
      {
        name: "Aditya Biradar",
        title: "Lab Leader",
        bio:
          "Aditya Biradar is a rising College Freshman at (either A&M or UT) majoring in Electrical and Computer Engineering. He has been programming for 2 years. Outside of school and programming, he enjoys playing basketball. He is also a member of the Stratford High School track team.",
        img: noImage,
      },
      {
        name: "Caleb Xu",
        title: "Lab Leader",
        bio:
          "Caleb Xu is a rising junior at Stratford High School who plans to pursue a career in computer science and business. He has been programming for 2 years. His main projects related to making graphical user interfaces. In addition, he is a member of Business Professionals of America, where he made it to state in Java Programming. In his spare time, Caleb plays lacrosse and video games.",
        img: noImage,
      },
      {
        name: "Annie Nguyen",
        title: "Advertising Team",
        bio:
          "Annie Nguyen is a rising senior at Spring Woods High School. Although she does not program, she has a lot of experience in communication and excels at organization and planning. In Annie’s free time, she enjoys making music and drinking boba.",
        img: annieImage,
      },
      {
        name: "Jasmine Zeng",
        title: "Advertising Team and Lab Leader",
        bio:
          "Jasmine Zeng is a rising senior at Stratford High School. Jasmine has been programming for 3 years and plans to become a criminal justice lawyer. Outside of programming and school, she is interested in crimes, mystery stories, DIY projects, baking, photography, and reading.",
        img: noImage,
      },
      {
        name: "Sean McReynolds",
        title: "Lab Leader",
        bio:
          "Sean McReynolds is a rising senior at Stratford High School. Sean has been programming throughout high school and particularly likes coding mods for video games. He wants to pursue a career in STEM. Outside of programming and school, Sean likes cycling and band.",
        img: noImage,
      },
      {
        name: "Jerome Conkright",
        title: "Lab Leader",
        bio:
          "Jerome Conkright is a rising freshman in college planning to major in computer science. He has been programming for 4 years, and outside of school and program, he enjoys his debate team and boxing.",
        img: noImage,
      },
    ];

    this.state = { card_data: card_data, visibility: false };
    this.sectionRef = React.createRef();
    this.teamCardRowRef = React.createRef();
  }

  componentDidMount() {
    const slider = this.teamCardRowRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

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
      console.log(walk);
    });

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
      var t = "None";
      if (data.title) {
        t = data.title;
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
          title={t}
          long={l}
          medium={m}
        />
      );
    }

    return (
      <div
        id="team-section"
        ref={this.sectionRef}
        className={
          this.state.visibility ? "fadeable visible" : "fadeable hidden"
        }
      >
        <h1 id="team-header-text">Our Team</h1>

        <div id="team-card-row" ref={this.teamCardRowRef}>
          {cards}
        </div>
      </div>
    );
  }
}

export default TeamSection;
