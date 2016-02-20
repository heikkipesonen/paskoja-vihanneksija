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

      // let locations = locationsSnapshot.val();

      // Object.keys(locations).forEach((locationId) => {
      //   let location = locations[locationId];
      //   delete location.delivery_dates;
      //
      //   this.locationsRef.child(locationId).set(location);
      // });

      // Object.keys(locations).forEach((locationId) => {
      //   let locationDeliveries = deliveryRef.child(locationId);
      //   let currentLocation = locations[locationId];
      //
      //   currentLocation.delivery_dates.forEach((delivery) => {
      //     locationDeliveries.push().set(delivery);
      //   });
      // });
    });



    // location.delivery_dates.forEach((date) => {
    //   this.deliveryRef.push().set(date);
    // });

    // let locations = locationsSnapshot.val();

    // locations.forEach((location) => {
    //   deliveryRef.child(location.id)
    // });
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
