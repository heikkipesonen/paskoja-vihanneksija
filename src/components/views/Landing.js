require('./landing.scss');

import React from 'react';
import View from '../ui/View';

class Landing extends React.Component {
  render() {
    return (
      <View className="application-landing gradient-1">
        <div className="main-title">
          <h1>Paskoja vihanneksija</h1>
          <h4>ja huonoja juureksia</h4>
        </div>
      </View>
    );
  }
}

export default Landing;
