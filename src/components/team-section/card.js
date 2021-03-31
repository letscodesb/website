import React, { Component} from 'react';
import './card.css';


class TeamCard extends Component {
    // bio = this.props.bio
    // image_url = this.props.image_url
    // name = this.props.name

    render() {

        var bioClass = 'team-card-bio-section';
        if(this.props.long){
            bioClass += ' long'
        }else if(this.props.medium){
            bioClass += ' medium'
        }
        return (
            <div className='team-card'>
                <div className='team-card-image-section'>
                    <img draggable='false' className='team-card-image' src={this.props.img.default} alt='Loading...'/>
                </div>

                <div className='team-card-name-section'>
                    <h2 className='team-card-name'>{this.props.name}</h2>
                    <h2 className='team-card-title'>{this.props.title}</h2>
                </div>

                <div>
                    <p className='team-card-bio' className={bioClass}>{this.props.bio}</p>
                </div>

            </div>
        )
    }
}

export default TeamCard;
