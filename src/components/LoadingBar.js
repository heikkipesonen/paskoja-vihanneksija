require('./loadingbar.scss');

import React from 'react';

class LoadingBar extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      loading: this.props.loading || false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      loading: nextProps.loading
    });
  }
  render() {
    let classNames = `loading-bar layout-center ${this.state.loading ? 'loading' : ''}`;
    return (
      <div className={classNames}>
        <div className="spinner spinner-bounce-middle"></div>
      </div>
    );
  }
}

export default LoadingBar;
