require('./location-title.scss');

import React from 'react';

class LocationTitle extends React.Component {
  render() {
    return (
      <div className="location-title text-center">
        <div className="location-title-text">
          <h3>{this.props.location.name}</h3>
          <div className="location-contact-info">
            <div className="location-contact">
              <p>{this.props.location.contact.tel}</p>
              <p>{this.props.location.contact.email}</p>
            </div>
            <div className="location-location">
              <p>{this.props.location.contact.street}</p>
              <p>{this.props.location.contact.city}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default LocationTitle;
