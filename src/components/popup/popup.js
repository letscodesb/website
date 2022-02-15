import React from "react";
import "./popup.css"
import { withTranslation } from "react-i18next";

export default withTranslation()(class Popup extends React.Component {
  
    render()
    {
        return (
            <div className="popup-box">
                <div className="box">
                    <b>Info on Let's Code Spring Branch 2022</b>
                    <p>Let's Code Spring Branch will be hosted in-person at Stratford High School in 2022 June 6-10 and June 13-17. More information will be coming soon.</p>
                </div>
            </div>
        );
    }
    
})

