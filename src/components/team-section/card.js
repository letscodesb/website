import React, { Component} from 'react';
import './card.css';


class TeamCard extends Component {
    // bio = this.props.bio
    // image_url = this.props.image_url
    // name = this.props.name

    render() {
        return (
            <div className='team-card'>
                <div className='team-card-image-section'>
                    <img draggable='false' className='team-card-image' src={this.props.img} alt='pain'/>
                </div>

                <div className='team-card-name-section'>
                    <h2 className='team-card-name'>{this.props.name}</h2>
                </div>

                <div className='team-card-bio-section'>
                    <p className='team-card-bio'>{this.props.bio}</p>
                </div>

            </div>
        )
    }
}

export default TeamCard;
