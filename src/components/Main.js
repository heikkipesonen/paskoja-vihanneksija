require('normalize.css');
require('styles/App.scss');
require('ionicons/scss/ionicons.scss');

import config from '../config';
import React from 'react';
import Firebase from 'firebase';
// import {Provider} from 'react-redux';

import View from './ui/View';
import Map from './map/Map';
import LocationView from './views/location/LocationView';
import UserBar from './views/user/UserBar';
// import Landing from './Landing';
// import Login from './Login';

// import store from '../stores/store';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      initialized: false,
      loading: true,
      login: false,

      locations: [],

      currentLocation: null,
      locationVisible: false
    };
  }

  componentWillMount() {
    this.locationsRef = new Firebase(config.url + '/locations');

    this.locationsRef.on('value', (locationsSnapshot) => {
      this.setState({
        locations: locationsSnapshot.val()
      });
    });
  }

  onLocationClick = (location) => {
    this.setState({
      currentLocation: location
    });
  };

  render() {
    return (
      <View>
        <Map markers={this.state.locations} onMarkerClick={this.onLocationClick}></Map>
        <LocationView location={this.state.currentLocation}></LocationView>
        <UserBar></UserBar>
      </View>
    );
  }
}

export default AppComponent;
