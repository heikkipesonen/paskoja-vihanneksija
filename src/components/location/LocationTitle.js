require('./location-title.scss');

import React from 'react';
import ImageLoader from '../ImageLoader';

class LocationTitle extends React.Component {
  render() {
    return (
      <div className="location-title text-center">
        <div className="image-container">
          <ImageLoader src="images/food.jpg"></ImageLoader>
          <div className="image-overlay"></div>
        </div>

        <div className="location-title-text">
          <div className="location-header">
            <h4>{this.props.location.name}</h4>
          </div>

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
