require('./timespan.scss');

import React from 'react';


class Timespan extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      start: null,
      end: null,

      date: '',
      time: ''
    };
  }

  componentDidMount() {
    if (this.props.timespan) {
      this.updateTime(this.props.timespan);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.timespan) {
      this.updateTime(nextProps.timespan);
    }
  }

  updateTime(model) {
    let start = new Date(Date.parse(model.start_datetime));
    let end = new Date(Date.parse(model.end_datetime));

    let date = `${this.pad(start.getDate())}.${this.pad(start.getMonth()+1)}.${start.getFullYear()}`;
    let time = `${this.pad(start.getHours())}:${this.pad(start.getMinutes())} - ${end.getHours()}:${this.pad(end.getMinutes())}`;

    this.setState({
      start: this.props.start_datetime,
      end: this.props.start_datetime,

      date,
      time
    });
  }

  pad(model) {
    return ('0'+model).slice(-2);
  }

  render() {
    return (
      <div className={this.props.className ? this.props.className + ' time-span' : 'time-span'}>
        <div className="time-span-date">{this.state.date}</div>
        <div className="time-span-time">{this.state.time}</div>
      </div>
    );
  }
}

export default Timespan;
