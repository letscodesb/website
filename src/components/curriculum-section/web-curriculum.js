import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import "./curriculum.css";
import "../../fonts.css";

class WebCurriculumSection extends Component {
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
                <h2 id="curriculum-section-header">{t('Web Development')}</h2>

                <div id="description-section">
                    {/* <ul id="curriculum-list-1" class="curriculum-list">
            <li>{t('curriculum-variables')}</li>
            <li>{t('curriculum-loops')}</li>
            <li>{t('curriculum-oop')}</li>
            <li>{t('curriculum-packages')}</li>
          </ul>
          <ul id="curriculum-list-2" class="curriculum-list">
            <li>{t('curriculum-functions')}</li>
            <li>{t('curriculum-lists')}</li>
            <li>{t('curriculum-algorithms')}</li>
            <li>{t('curriculum-final-project')}</li>
          </ul> */}
                    <p class="curriculum-description" ref={this.domRef}>{t('web-camp')}</p>
                </div>
            </div>
        );
    }
}

export default withTranslation()(WebCurriculumSection);