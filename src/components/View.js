import React from 'react';
import ScrollView from './ScrollView';

class View extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let classNames = this.props.className ? this.props.className + ' view' : 'view';

    return (
      <div className={classNames} ref="ViewContainer">
        <ScrollView>
          {this.props.children}
        </ScrollView>
      </div>
    );
  }
}

export default View;
