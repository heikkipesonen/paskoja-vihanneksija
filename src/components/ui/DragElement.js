import React from 'react';

class DragElement extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      direction: false, // current drag direction
      x: 0,
      y: 0,
      animation: 0, // current animation duration
      // speed of current event
      velocity:{
        x: 0,
        y: 0
      }
    };

    // last mouse event for calculating steps
    this.lastEvent = {
      x: 0,
      y: 0,
      timeStamp: 0
    };

    this.options = {
      max_x: 0,
      max_y: 100,
      min_x: 0,
      min_y: 0,
      tension_x: 0.3, // rubberband effect when out of bounds
      tension_y: 0.3,
      animationDuration: 300 // default animation duration
    };
  }

  setOptions(options) {
    for (let i in options) {
      this.options[i] = options[i];
    }
  }

  componentDidMount() {
    this.refs.dragElement.addEventListener('transitionend', this.animationEnd);
    this.setOptions(this.props.options);
  }

  componentWillUnmount(){
    this.refs.dragElement.removeEventListener('transitionend', this.animationEnd);
  }

  /**
   * retrieve mouse or touch event from an event object
   * @param  {[type]} evt [description]
   * @return {[type]}     [description]
   */
  getCursor (evt) {
    if (evt.touches.length > 0){
      return { x:evt.touches[0].pageX, y:evt.touches[0].pageY, timeStamp:evt.timeStamp };
    } else {
      return { x:evt.pageX, y:evt.pageY, timeStamp:evt.timeStamp };
    }
  }


  /**
   * when drag is started, reset variables as needed
   * @param  {[type]} evt [description]
   * @return {[type]}     [description]
   */
  dragStart = (evt) => {
    evt.stopPropagation();

    this.setState({
      velocity:{
        x:0,
        y:0
      },
      direction: false
    });

    this.lastEvent = this.getCursor(evt);
  };


  /**
   * while dragging an element
   * @param  {[type]} evt [description]
   * @return {[type]}     [description]
   */
  dragMove = (evt) => {
    evt.stopPropagation();
    evt.preventDefault();

    let currentPosition = this.getCursor(evt);

    let sx = currentPosition.x - this.lastEvent.x;
    let sy = currentPosition.y - this.lastEvent.y;
    let direction = this.state.direction;

    // if no direction is specified, decide the direction based on previous and current pointer position
    // so only one axis is available for movement at once
    if (!direction) {
      direction = Math.abs(sx) > Math.abs(sy) ? 'x' : 'y';
    }

    // if over bounds, apply tension
    if ((this.state.x + sx > this.options.max_x && sx > 0) || (this.state.x + sx < this.options.min_x && sx < 0)){
      sx = sx * this.options.tension_x;
    }

    if ((this.state.y + sy > this.options.max_y && sy > 0) || (this.state.y + sy < this.options.min_y && sy < 0)){
      sy = sy * this.options.tension_y;
    }

    this.setState({
      velocity: {
        x: sx / (currentPosition.timeStamp - this.lastEvent.timeStamp),
        y: sy / (currentPosition.timeStamp - this.lastEvent.timeStamp)
      },
      animation: 0,
      x: direction === 'x' ? Math.round(this.state.x + sx) : this.state.x,
      y: direction === 'y' ? Math.round(this.state.y + sy) : this.state.y,
      direction: direction
    });

    this.lastEvent = currentPosition;
  };

  /**
   * @param  {[type]} evt [description]
   * @return {[type]}     [description]
   */
  dragEnd = (evt) => {
    evt.stopPropagation();

    // check if end position is within bounds
    // if not, apply animation to nearest position within bounds
    let dx = this.state.x > this.options.max_x ? this.options.max_x : this.state.x < this.options.min_x ? this.options.min_x : this.state.x;
    let dy = this.state.y > this.options.max_y ? this.options.max_y : this.state.y < this.options.min_y ? this.options.min_y : this.state.y;

    let animation = this.state.x === dx && this.state.y === dy ? 0 : this.options.animationDuration;

    this.setState({
      animation: animation,
      x: dx,
      y: dy,
      direction: false
    });
  };

  /**
   * when element has stopped animating
   * @return {[type]} [description]
   */
  animationEnd = () => {
    if (this.props.onAnimationEnd){
      this.setState( this.props.onAnimationEnd(this.state, this.options) );
      return;
    }

    this.setState({
      animation: 0
    });
  };

  render() {
    let classNames = this.props.className ? this.props.className + ' drag-element' : 'drag-element';
    let style = {
      transform: `translate3d(${this.state.x}px, ${this.state.y}px, 0)`,
      transitionDuration: `${this.state.animation}ms`,
      transitionTimingFunction: 'ease-out'
    };

    return (
      <div
        ref="dragElement"
        style={style}
        onTransitionEnd={this.animationEnd}
        onTouchStart={this.dragStart}
        onTouchMove={this.dragMove}
        onTouchEnd={this.dragEnd}

        className={classNames}>
        {this.props.children}
      </div>
    );
  }
}

export default DragElement;