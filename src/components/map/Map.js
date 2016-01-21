require('./map.scss');

import React from 'react';
import config from './mapconfig';
import mapUtils from './MapUtils';

class Map extends React.Component {
  constructor (props) {
    super(props);

    this.locationIds = {};

    this.state = {
      center: [0,0],
      markers: []
    };
  }

  componentDidMount () {
    this.map = new google.maps.Map(this.refs.mapLayer, config);
    this.updateMarkers(this.props.markers);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    this.updateMarkers(nextProps.markers);
  }

  updateMarkers(markers) {
    if (!markers) {
      markers = this.state.markers;
    }

    markers.forEach((location) => {
      this.addLocation(location);
    });
  }

  hasLocation(location) {
    return !!this.locationIds[location.id];
  }

  addLocation(location) {
    if (!this.hasLocation(location)) {
      let markerOptions = {
        position: new google.maps.LatLng(location.position.lat, location.position.lng),
        icon: {
          url:'images/marker-red.png',
          scaledSize: new google.maps.Size(80/2,122/2)
        },
        data:location
      };

      this.locationIds[location.id] = true;

      var marker = new google.maps.Marker(markerOptions);
      marker.setMap(this.map);

      mapUtils.on('click', marker, () => this.locationClick(marker.data));

      this.state.markers.push(marker);

      this.setState({
        markers: this.state.markers
      });
    }
  }

  locationClick(location){
    if (this.props.onLocationClick) {
      this.props.onLocationClick(location);
    }
  }

  removeMarker(marker){
    let markers = this.state.markers;
    let removedMarker = markers.splice(markers.indexOf(marker), 1)

    if (removedMarker) {
      delete this.locationIds[removedMarker.data.id];
      removedMarker.setMap(null);
    }

    this.setState({
      markers: markers
    });
  }


  render () {
    return (<div className="map-view" ref="mapLayer"></div>);
  }
}

export default Map;
