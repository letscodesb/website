import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import "./curriculum.css";
import "../../fonts.css";

class GameCurriculumSection extends Component {
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
            <div id="curriculum-section" className={this.state.visibility ? ' visible' : ' hidden'} ref={this.domRef}>
                <h2 id="curriculum-section-header">{t('Game Development Camp')}</h2>
                <div id="description-section">
                    <p class="curriculum-description" ref={this.domRef}>{t('game-camp')}</p>
                </div>
            </div>
        );
    }
}

export default withTranslation()(GameCurriculumSection);
