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
      loading: false
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
    this.setState({
      loading: true
    });

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

  onLocationClick = (location) => {
    this.setState({
      currentLocation: location
    });
  };

  render() {

    // {this.props.children}

    return (
      <View>
        {(()=>{
          if (!this.state.initialized) {
            return (<Landing></Landing>);
          } else if (this.state.login){
            return (
              <div className="view">
                <Map markers={this.state.locations} onMarkerClick={this.onLocationClick}></Map>
                <LocationView location={this.state.currentLocation}></LocationView>
                <UserBar></UserBar>
              </div>
            );
          } else {
            return (<Login onLogin={this.login}></Login>);
          }
        })()}
      </View>
    );
  }
}

export default AppComponent;
