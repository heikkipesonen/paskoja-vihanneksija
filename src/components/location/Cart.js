require('./cart.scss');

import React from 'react';
import ScrollContainer from '../ui/ScrollContainer';
import IconButton from '../IconButton';
import DragView from '../ui/DragView';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      productCount: 0,
      providersCount: 0,
      total: 0,
      icon: 'ios-arrow-up',
      viewPosition: null,
      viewMinY: 0,
      viewMaxY: window.innerHeight - 50
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      products: nextProps.products
    });
  }


  render() {
    return (
      <DragView initialPosition={this.state.viewMaxY} className="cart" maxY={this.state.viewMaxY} minY={this.state.viewMinY}>
        <div className="cart-title">
          <div className="flex cart-tab">
            {this.state.productCount}
          </div>
          <div className="flex cart-tab">
            <IconButton icon={this.state.icon}></IconButton>
          </div>
          <div className="flex cart-tab">
            {this.state.total}
          </div>
        </div>

        <ScrollContainer className="view-content">
        </ScrollContainer>

      </DragView>
    );
  }

}

export default Cart;
