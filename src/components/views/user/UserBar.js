require('./user-bar.scss');

import React from 'react';
import DragView from '../../ui/DragView';
import ScrollContainer from '../../ui/ScrollContainer';

class UserBar extends DragView{

  constructor(props){
    super(props);

    this.state = {
      direction: false, // current drag direction
      x: 0,
      y: -window.innerHeight + 32,
      animation: 0, // current animation duration
      // speed of current event
      velocity:{
        x: 0,
        y: 0
      },

      user:{
        name: 'seppo keinonen'
      }
    };

    this.setOptions({
      classTolerance: 50,
      changeVelocity: 0.2,
      max_y: 0,
      min_y: -window.innerHeight + 32,
      tension: {
        left: 0,
        right: 0,
        top: 0.3,
        bottom: 0
      }
    });
  }

  render() {
    return (
      <div
        ref="dragElement"
        style={this.getElementStyle()}
        className={`view user-view drag-view layout-column gradient-1 ${this.getClassNames()}`}>

        <div className="user-view-wrapper view layout-column">
          <ScrollContainer className="view-content flex" disabled={this.state.y === this.options.min_y}>
            <div className="layout-center">
              <div className="icon-header icon-round">
                <i className="ion-social-facebook"></i>
              </div>
            </div>
          </ScrollContainer>
          <div className="user-bar">
            <div className="layout-row">
              <div className="user-bar-icon">
                <i className="ion-social-facebook"></i>
              </div>

              <h3 className="flex user-title">{this.state.user.name}</h3>

              <div className="user-bar-icon">
                <i className="ion-ios-gear"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserBar;
