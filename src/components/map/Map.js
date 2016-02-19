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
          url:'images/marker-market.png',
          // scaledSize: new google.maps.Size(94/2,137/2)
          // url:`images/marker-${location.type}.png`,
          scaledSize: new google.maps.Size(81/2,116/2)
        },
        data:location
      };

      this.locationIds[location.id] = true;

      var marker = new google.maps.Marker(markerOptions);
      marker.setMap(this.map);

      mapUtils.on('click', marker, () => this.markerClick(marker));

      this.state.markers.push(marker);

      this.setState({
        markers: this.state.markers
      });
    }
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
