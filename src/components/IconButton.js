require('./icon-button.scss');

import React from 'react';

class Landing extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.icon !== this.props.icon;
  }

  render() {
    let classNames = this.props.className ? this.props.className + ' icon-button' : 'icon-button';
    return (
        <div className={classNames}>
          <i className={'ion-' + this.props.icon}></i>
        </div>
    );
  }
}

export default Landing;
