import React from 'react';
import ScrollBlocker from './helpers/ScrollBlocker';

class ScrollView extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    console.log(this.refs.scrollWrapper);
    this.scrollBlocker = new ScrollBlocker(this.refs.scrollWrapper);
  }

  componentWillUnmount () {

  }

  render () {
    let classNames = this.props.className ? this.props.className + ' scroll-y' : 'scroll-y';
    return (<div className={classNames} ref="scrollWrapper">{this.props.children}</div>);
  }
}

export default ScrollView;
