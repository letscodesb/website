import React, { Component } from "react";
import { withTranslation } from 'react-i18next';
import "./signup-section.css";

class GoogleSignupSection extends Component {
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
      
        // return (
        //     <div 
        //     id = "signup-section"
        //     ref = { this.domRef }
        //     className = { this.state.visibility ? " visible" : " hidden" }>

        //         <a href="https://docs.google.com/forms/d/e/1FAIpQLSefp29Wcum1L1ws7fHSoYF9uBeFD0ye3OuTHyEIAggwbzbyBg/viewform" style = {{fontSize: "400%", color:"white", textDecoration:'none', fontWeight:"bold"}}>{t("enroll-header")}</a>
        //     </div>
        // );
        return (
            <div 
            id = "signup-section"
            ref = { this.domRef }
            className = { this.state.visibility ? " visible" : " hidden" }>
                    <iframe style={{height: "82%"}} src="https://docs.google.com/forms/d/e/1FAIpQLSefp29Wcum1L1ws7fHSoYF9uBeFD0ye3OuTHyEIAggwbzbyBg/viewform"></iframe>
            </div>
        )
    }
}

export default withTranslation()(GoogleSignupSection);
