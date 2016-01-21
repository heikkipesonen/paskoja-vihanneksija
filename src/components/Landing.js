require('./landing.scss');

import React from 'react';
import View from './View';
import IconButton from './IconButton';

class Landing extends React.Component {
  render() {
    return (
      <View className="application-landing">
        <div className="main-title">
          <h1>Paskoja vihanneksija</h1>
          <h4>ja huonoja juureksia</h4>
        </div>
        <div className="login-wrapper layout-row">
          <IconButton onClick={this.props.setFakeLogin} className="button-round" icon="social-facebook"></IconButton>
          <IconButton onClick={this.props.setFakeLogin} className="button-round" icon="social-google"></IconButton>
        </div>
      </View>
    );
  }
}

export default Landing;
