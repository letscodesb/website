import React, { Component} from 'react';
import './header.css'

import HamburgerMenu from './hamburger.js';

class Header extends Component {
    render(){
        return(
            <div id='header-section'>
                <div id='logo'></div>
                <HamburgerMenu id='hamburger-menu' />
                <div id='camp-description-section'>
                    <p id='camp-description-text'>
                    Let’s Code SBISD is a free week-long virtual coding camp during the summer for all SBISD middle schoolers. There is no prior programming experience needed. There are 3 sessions to choose from, and each student will have a very personalized experience with their instructor.  The course is taught in the Python programming language. 
                    </p>
                </div>
            </div>
        )
    }
}
export default Header;