require('./cart.scss');

import React from 'react';
import DraggableView from '../DraggableView';
import ScrollView from '../ScrollView';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      productCount: 0,
      providersCount: 0,
      total: 0
    };

    this.viewOptions = {
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

  render() {
    return (
      <DraggableView className="cart" options={this.viewOptions}>
        <div className="cart-title">
          <div className="flex cart-tab">
            {this.state.productCount}
          </div>
          <div className="flex cart-tab">
            {this.state.providersCount}
          </div>
          <div className="flex cart-tab">
            {this.state.total}
          </div>
        </div>

        <ScrollView className="view-content">
        </ScrollView>

      </DraggableView>
    );
  }

}

export default Cart;
