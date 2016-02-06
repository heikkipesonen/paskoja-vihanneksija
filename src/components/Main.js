require('normalize.css');
require('styles/App.scss');
require('ionicons/scss/ionicons.scss');

import React from 'react';
import {Provider} from 'react-redux';

import View from './View';
import Map from './map/Map';
import Login from './Login';
import LocationView from './location/LocationView';
import UserBar from './user/UserBar';
import Landing from './Landing';

import store from '../stores/store';

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

  componentDidMount() {
    this.setState({
      loading: true
    });

    this.loadInitialData().then(() => {
      this.setState({
        initialized: true
      });
    })
  }

  loadInitialData() {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve({
          ok: true
        });
      }, 1500);
    });
  }

  loadMap() {
    fetch('../data/locations.json').then((data) => {
      return data.json().then((response) => {

        setTimeout(()=>{
          this.setState({
            loading: false,
            locations: response
          });
        }, 1500);
      });
    });
  }

  login = (data) => {
    this.setState({
      login: true
    });

    this.loadMap();
  };

  render() {
    // (()=>{
    //   if (!this.state.login) {
    //     // return (<Login onLogin={this.setLogin}></Login>);
    //     return (<Landing setFakeLogin={this.setLogin}></Landing>);
    //   } else {
    //     return (
    // <Map markers={this.state.locations} onLocationClick={this.onLocationClick}></Map>
    // <LocationView location={this.state.currentLocation}></LocationView>
    // <UserBar></UserBar>
    return (
      <View>
        {(()=>{
          if (!this.state.initialized) {
            return (<Landing></Landing>);
          }

          if (this.state.login){
            return (
              <div className="view">
                <Map></Map>
                <LocationView location={this.state.currentLocation}></LocationView>
                <UserBar></UserBar>
              </div>
            );
          }

          return (<Login onLogin={this.login}></Login>);
        })()}
        {this.props.children}
      </View>
    );
  }
}

export default AppComponent;
