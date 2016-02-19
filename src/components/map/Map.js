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
    this.updateLocations(this.props.markers);
  }

  componentWillReceiveProps(nextProps) {
    this.updateLocations(nextProps.markers);
  }

  updateLocations(locations) {
    let markers = [];

    this.state.markers.forEach((marker) => {
      marker.setMap(null);
    });

    Object.keys(locations).forEach((locationId) => {
      let location = locations[locationId];
      location.id = locationId;

      let markerOptions = {
        position: new google.maps.LatLng(location.contact.location.lat, location.contact.location.lng),
        icon: {
          url:'images/marker-market.png',
          // scaledSize: new google.maps.Size(94/2,137/2)
          // url:`images/marker-${location.type}.png`,
          scaledSize: new google.maps.Size(81/2,116/2)
        },
        data:location
      };

      var marker = new google.maps.Marker(markerOptions);
      marker.setMap(this.map);
      mapUtils.on('click', marker, () => this.markerClick(marker));

      markers.push(marker);
    });

    this.setState({
      markers: markers
    });
  }

  markerClick(marker){
    let mapSize = [this.refs.mapLayer.offsetWidth/2, 120];
    let markerPosition = mapUtils.getPixelPosition(marker.position, this.map);
    let markerDiff = markerPosition.map((d, i) => {return d - mapSize[i]});

    this.map.panBy(markerDiff[0], markerDiff[1]);

    if (this.props.onMarkerClick) {
      this.props.onMarkerClick(marker.data);
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
