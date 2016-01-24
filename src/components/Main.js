require('normalize.css');
require('styles/App.scss');
require('ionicons/scss/ionicons.scss');

import React from 'react';
import {Provider} from 'react-redux';
import View from './View';
import Map from './map/Map';
import LocationView from './location/LocationView';
import UserBar from './views/UserBar';
// import Landing from './Landing';
// import Login from './Login';
import store from '../stores/store';

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
      <Provider store={store}>
        <View className="main-view">
          <Map markers={this.state.locations} onLocationClick={this.onLocationClick}></Map>
          <LocationView visible={this.state.locationVisible} location={this.state.currentLocation}></LocationView>
          <UserBar></UserBar>
        </View>
      </Provider>
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
