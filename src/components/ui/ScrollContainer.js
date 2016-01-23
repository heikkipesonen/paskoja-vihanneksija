require('./scroll-container.scss');

import React from 'react';
/**
 * scroll hax0r
 * haxes scroll to work in ios and allows scroll to propagate if at end (for drag views)
 */
class ScrollContainer extends React.Component{

  constructor(props) {
    super(props);

    this.direction = false;
    this.height = 0;

    this.delta = {
      x:0,
      y:0
    };

    this.state = {
      disabled: this.props.disabled || false,
      top: 0,
      scrollHeight: 0
    };

    this.lastEvent = false;
  }

  componentWillReceiveProps(nextProps) {
    console.log(!!nextProps.disabled);
    this.setState({
      disabled: !!nextProps.disabled
    });
  }

  componentDidMount() {
    this.refs.view.addEventListener('touchstart', this.onTouchStart);
    this.refs.view.addEventListener('touchmove', this.onTouchMove);
    this.refs.view.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    this.refs.view.removeEventListener('touchstart', this.onTouchStart);
    this.refs.view.removeEventListener('touchmove', this.onTouchMove);
    this.refs.view.removeEventListener('scroll', this.onScroll);
  }

  easeInOutQuad(t, b, c, d){
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  }

  getCursor(evt){
    if (evt.touches.length > 0){
      return {x:evt.touches[0].pageX,y:evt.touches[0].pageY};
    } else {
      return {x:evt.pageX,y:evt.pageY};
    }
  }

  onScroll = () => {
    this.setState({
      top: this.refs.view.scrollTop
    });

    if (this.props.onScroll){
      this.props.onScroll(this.state);
    }
  };

  onTouchStart = (evt) => {
    if (this.state.disabled) {
      evt.preventDefault();
      return;
    }

    this.height = this.refs.view.offsetHeight;

    let scrollHeight = this.refs.view.scrollHeight;
    let scrollPosition = this.refs.view.scrollTop;
    /**
     * check if element scroll is at the top, or at the bottom,
     * and apply 1px offset to element so ios scrolls this element instead of document body
     * or some other element beneath
     */
    if (this.height < scrollHeight && scrollPosition === 0){
      scrollPosition = 1;
    } else if (this.height < scrollHeight && scrollPosition === scrollHeight - this.height){
      scrollPosition = scrollHeight - this.height - 1;
    }

    this.setState({
      scrollHeight: scrollHeight
    });

    evt.stopPropagation();

    this.direction = false;
    this.delta.x = 0;
    this.delta.y = 0;
    this.lastEvent = this.getCursor(evt);
  };

  isAtBottom() {
    return this.refs.view.scrollTop >= this.refs.view.scrollHeight;
  }

  isAtTop() {
    return this.refs.view.scrollTop < 2;
  }

  onTouchMove = (evt) => {
    if (this.state.disabled || evt.touches.length > 1) {
      evt.preventDefault();
      return;
    }

    let scrollPosition = this.refs.view.scrollTop;
    let position = this.getCursor(evt);
        this.delta.x += position.x - this.lastEvent.x;
        this.delta.y += position.y - this.lastEvent.y;

    let isAtBottom = scrollPosition >= this.refs.view.scrollHeight - this.height - 1 && this.delta.y < 0;
    let isAtTop = scrollPosition < 2 && this.delta.y > 0;

    if (this.direction === false){
      if (Math.abs(this.delta.y) > Math.abs(this.delta.x)){
        this.direction = 'y';
      } else if (Math.abs(this.delta.y) <= Math.abs(this.delta.x)){
        this.direction = 'x';
      }
    }

    /**
     * if touch event is still scrolling this div
     * block the element from propagating, otherwise let it propagate to next scrolling one
     * in this case usually the draggable one, under scroller.
     */
    if ( this.direction==='y' && !isAtTop && !isAtBottom ){
      evt.stopPropagation();
    } else if (isAtTop || isAtBottom) {
      evt.preventDefault();
    }
  };

  render() {
    let classNames = this.props.className ? this.props.className + ' scroll-container' : 'scroll-container';
    return (<div className={classNames} ref="view">{this.props.children}</div>);
  }
}

export default ScrollContainer;
