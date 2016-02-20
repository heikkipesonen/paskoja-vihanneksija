import React from 'react';

class Select extends React.Component {
  render() {
    return (
      <select onChange={() => this.props.onChange(option)}>
        {this.props.options.map((option, index) => {
          return (<option value={option.value} value={this.props.selected}>{option.label}</option>);
        })}
      </select>
    );
  }
}

export default Select;
