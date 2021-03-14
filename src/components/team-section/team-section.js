import React, { Component } from "react";
import TeamCard from "./card";

import "./team-section.css";

class TeamSection extends Component {
  constructor(props) {
    super(props);
    let card_data = [
      {
        name: "neil",
        bio: "coolest person youve ever seen",
        img:
          "https://www.biography.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
      },
      {
        name: "bobby",
        bio: "lamest person youve ever seen",
        img:
          "https://www.biography.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
      },
      {
        name: "neil",
        bio: "coolest person youve ever seen",
        img:
          "https://www.biography.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
      },
      {
        name: "neil",
        bio: "coolest person youve ever seen",
        img:
          "https://www.biography.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
      },
      {
        name: "neil",
        bio: "coolest person youve ever seen",
        img:
          "https://www.biography.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
      },
      {
        name: "neil",
        bio: "coolest person youve ever seen",
        img:
          "https://www.biography.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
      },
      {
        name: "neil",
        bio: "coolest person youve ever seen",
        img:
          "https://www.biography.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
      },
      {
        name: "neil",
        bio: "coolest person youve ever seen",
        img:
          "https://www.biography.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
      },
    ];

    this.state = { card_data: card_data };
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
  }
  render() {
    //   <ScrollMenu data={this.state.card_data}/>
    let cards = [];
    for (let data of this.state.card_data) {
      cards.push(<TeamCard name={data.name} bio={data.bio} img={data.img} />);
    }

    return (
      <div id="team-section">
        <h1 id="team-header-text">Our Team</h1>

        <div id="team-card-row" ref={this.teamCardRowRef}>
          {cards}
        </div>
      </div>
    );
  }
}

export default TeamSection;
