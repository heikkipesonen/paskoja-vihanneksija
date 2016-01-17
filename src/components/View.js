import React from 'react';

class View extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let classNames = this.props.className ? this.props.className + ' view' : 'view';

    return (
      <div className={classNames} ref="ViewContainer">
          {this.props.children}
      </div>
    );
  }
}

export default View;
