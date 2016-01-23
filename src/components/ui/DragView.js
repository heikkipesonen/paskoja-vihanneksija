import React from 'react';
import DragElement from './DragElement';

class DragView extends DragElement{

    /**
     * bind listener for transitionend and set options according to props
     * @return {[type]} [description]
     */
    componentDidMount() {
      this.refs.dragElement.addEventListener('transitionend', this.animationEnd);

      this.setState({
        animation: 0,
        y: this.props.initialPosition || 0
      });

      this.setOptions({
        changeVelocity: 0.2,
        max_y: this.props.maxY,
        min_y: this.props.minY,
        tension: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0.3
        }
      });
    }

    /**
     * on drag end
     * @param  {[type]} evt [description]
     * @return {[type]}     [description]
     */
    dragEnd = (evt) => {
      evt.stopPropagation();

      // distance to max and min positions
      let distToMax = Math.abs(this.options.max_y - this.state.y);
      let distToMin = Math.abs(this.state.y - this.options.min_y);

      // decide which is closer and then apply that as next position
      let dy = distToMin < distToMax ? this.options.min_y : this.options.max_y;

      // determine if velocity is over the change threshold,
      // if so, then goto next position
      if (this.state.velocity.y > this.options.changeVelocity){
        dy = this.options.max_y;
      }

      if (this.state.velocity.y < -this.options.changeVelocity){
        dy = this.options.min_y;
      }

      // apply animation
      let dx = 0;
      let animation = this.state.x === dx && this.state.y === dy ? 0 : this.options.animationDuration;

      this.setState({
        animation: animation,
        x: dx,
        y: dy,
        direction: false
      });

      this.lastEvent = false;
    };

    render(){
      let classNames = this.props.className ? this.props.className + ' drag-view' : 'drag-view';

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

export default DragView;
