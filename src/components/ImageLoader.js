import React from 'react';
import Utils from './helpers/utils.js';

class ImageLoader extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      src: null,
      loading: false
    };
  }

  componentDidMount () {
    this.preload(this.props.src);
  }

  componentWillReceiveProps (newProps) {
    this.preload(newProps.src);
  }

  shouldComponentUpdate (newProps, newState) {
    return this.state.src !== newState.src || this.state.loading !== newState.loading;
  }

  preload (src) {
    this.setState({loading: true});
    return Utils.preloadImage(src).then((img) => {
      this.setState({src: img.src, loading: false});
    });
  }

  render () {
    let currentClassName = this.props.className ? this.props.className + ' ' : '';
    let classNames = currentClassName + ['image','animate', this.state.loading ? 'image-loading' : 'image-ready'].join(' ');
    let style = {
      backgroundImage:'url('+ this.state.src + ')'
    };

    return (
      <div className={classNames} style={style}>
      </div>
    );
  }
}

export default ImageLoader;
