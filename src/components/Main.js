require('normalize.css');
require('styles/App.scss');
require('ionicons/scss/ionicons.scss');

import React from 'react';
import View from './View';
import Map from './map/Map';
import LocationView from './location/LocationView';
import Landing from './Landing';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      login: false,
      locations: [],
      currentLocation: null,
      locationVisible: false
    };
  }

  componentDidMount() {
    fetch('../data/locations.json').then((data) => {
      return data.json().then((response) => {
        this.setState({
          locations: response
        });
      });
    });
  }

  onLocationClick = (location) => {
    console.log(location);
    this.setState({
      currentLocation: location,
      locationVisible: true
    });
  };

  setLogin = () => {
    this.setState({
      login: true
    });
  };

  render() {
    return (
      (()=>{
        if (!this.state.login) {
          return (<Landing setFakeLogin={this.setLogin}></Landing>);
        } else {
          return (
            <View className="main-view">
              <Map markers={this.state.locations} onLocationClick={this.onLocationClick}></Map>
              <LocationView visible={this.state.locationVisible} location={this.state.currentLocation}></LocationView>
            </View>
          );
        }
      })()

    );
  }
}

export default AppComponent;
