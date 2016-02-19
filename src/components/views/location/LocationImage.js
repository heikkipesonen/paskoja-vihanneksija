require('./location-image.scss');

import React from 'react';
import ImageLoader from '../../ImageLoader';

class LocationImage extends React.Component{

  render() {
    let classNames = this.props.className ? this.props.className + ' location-image' : 'location-image';

    return (
      <div className={classNames}>
        <ImageLoader src="images/food.jpg"></ImageLoader>
      </div>
    );
  }
}

export default LocationImage;
