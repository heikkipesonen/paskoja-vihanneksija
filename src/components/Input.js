require('./input.scss');

import React from 'react';

class Landing extends React.Component {

  constructor(...args) {
    super(args);

    this.state = {
      dirty: false,
      focus: false
    };
  }

  onChange = () => {
    if (this.refs.inputField) {
      let value = this.refs.inputField.value;
      this.props.onChange(value);
      if (value) {
        this.setState({
          dirty: true
        });
      } else {
        this.setState({
          dirty: false
        });
      }
    }
  };

  onFocus = () => {
    this.setState({
      focus: true
    });
  };

  onBlur = () => {
    this.setState({
      focus: false
    });
  };

  render() {
    let classNames = this.state.dirty ? 'has-text ' : '';
    classNames = this.state.focus ? classNames + ' has-focus ' : classNames;

    return (
      <div className={classNames + 'input-container layout-column'}>
        <label className="input-label">{this.props.label}</label>
        <input ref="inputField" className="f-input" type={this.props.type} onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.onChange}></input>
      </div>
    );
  }
}

export default Landing;
