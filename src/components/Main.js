require('normalize.css');
require('styles/App.scss');
require('ionicons/scss/ionicons.scss');

import React from 'react';
import View from './View';
import Map from './map/Map';
import LocationView from './location/LocationView';
// import Landing from './Landing';
// import Login from './Login';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      login: false,
      locations: [],
      currentLocation: null,
      locationVisible: false,
      viewPosition: window.innerHeight
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
    this.setState({
      currentLocation: location,
      locationVisible: true,
      viewPosition: 0
    });
  };

  setLogin = () => {
    this.setState({
      login: true
    });
  };

  render() {
    return (
      <View className="main-view">
        <Map markers={this.state.locations} onLocationClick={this.onLocationClick}></Map>
        <LocationView animateTo={this.state.viewPosition} visible={this.state.locationVisible} location={this.state.currentLocation}></LocationView>
      </View>
    );
    // return (
    //   (()=>{
    //     if (!this.state.login) {
    //       return (<Login onLogin={this.setLogin}></Login>);
    //       // return (<Landing setFakeLogin={this.setLogin}></Landing>);
    //     } else {
    //     }
    //   })()
    //
    // );
  }
}

export default AppComponent;
