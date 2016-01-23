require('./currency.scss');

import React from 'react';

class Currency extends React.Component {

  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
  }

  render() {
    let values = Math.round(this.props.value * 100)/ 100;

    values = values.toString().split(/[\,\.]/);
    values[1] = values[1] ? values[1] : '00';
    values[1] = values[1].length < 2 ? values[1] + '0' : values[1];

    return (
      <div className="currency">
        <span className="value">{values[0]}</span><span className="decimals">{',' + values[1]}&nbsp;€</span>
      </div>
    );
  }
}

export default Currency;
