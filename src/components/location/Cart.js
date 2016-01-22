require('./cart.scss');

import React from 'react';
import ScrollView from '../ScrollView';
import DragView from '../helpers/DragView';
import IconButton from '../IconButton';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      productCount: 0,
      providersCount: 0,
      total: 0,
      icon: 'ios-arrow-up'
    };

    this.viewOptions = {
			leaveAnimationDuration: 300,
			returnAnimationDuration: 300,
      offset: {
        y: window.innerHeight - 50,
        x: 0
      },
      axis:{
        x:false,
        y:{
          min: 0,
          max: window.innerHeight - 50,
          tension: true
        }
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      products: nextProps.products
    });
  }

  componentDidMount() {
    this.dragView = new DragView(this.refs.draggable, this.viewOptions);
  }

  componentWillUnmount(){
    this.draggable.destroy();
  }

  toggleCart = () => {
    if (this.viewOptions.offset.y === this.viewOptions.axis.y.max) {
      this.dragView.setOffset({y:this.viewOptions.axis.y.min}, this.viewOptions.leaveAnimationDuration);
    } else {
      this.dragView.setOffset({y:this.viewOptions.axis.y.max}, this.viewOptions.leaveAnimationDuration);
    }
  };

  render() {
    return (
      <div className="cart" ref="draggable">
        <div className="cart-title">
          <div className="flex cart-tab">
            {this.state.productCount}
          </div>
          <div className="flex cart-tab" onClick={this.toggleCart}>
            <IconButton icon={this.state.icon}></IconButton>
          </div>
          <div className="flex cart-tab">
            {this.state.total}
          </div>
        </div>

        <ScrollView className="view-content">
        </ScrollView>

      </div>
    );
  }

}

export default Cart;
