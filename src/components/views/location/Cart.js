require('./cart.scss');

import React from 'react';
import ScrollContainer from '../../ui/ScrollContainer';
import IconButton from '../../ui/IconButton';
import DragView from '../../ui/DragView';
import ProductList from '../product/ProductList';
import Currency from '../../Currency';
import Button from '../../ui/Button';
import {Map} from 'immutable';

class Cart extends DragView {
  constructor(props) {
    super(props);

    this.state = {

      products: null,
      productList: new Map(),

      sum: 0,
      count: 0,
      icon: 'ios-arrow-right',

      direction: false, // current drag direction
      x: 0,
      y: window.innerHeight - 42,
      animation: 0, // current animation duration
      // speed of current event
      velocity:{
        x: 0,
        y: 0
      }
    };

    this.setOptions({
      classTolerance: 50,
      changeVelocity: 0.2,
      max_y: window.innerHeight - 42,
      min_y: 0,
      tension: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0.3
      }
    });
  }

  componentDidMount() {
    super.componentDidMount();

    this.setState({
      products: this.props.products || new Map()
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.productList !== this.state.productList ||
      nextState.y !== this.state.y ||
      nextState.x !== this.state.x ||
      nextState.animation !== this.state.animation;
  }

  updateProductList(products) {
    let productList = new Map();
    let sum = 0;
    let count = 0;

    products.forEach((product, id) => {



      let available = product.count;
      let price = product.count * product.package_price;

      sum += price;
      count++;

      productList = productList.set(id, product);
    });

    this.setState({
      count,
      sum,
      productList
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.products !== this.props.products){
      this.updateProductList(nextProps.products);
    }
  }

  toggleOpen() {
    this.setState({
      y: this.options.max_y,
      animation: this.options.animationDuration
    });
  }

  render() {
    return (
      <div
        ref="dragElement"
        style={this.getElementStyle()}
        className={this.getClassNames('cart layout-column')}>

        <ScrollContainer
          className="view-content"
          disabled={this.state.y !== this.options.min_y}>

          <div className="gradient-1 layout-column">
            <div className="cart-title layout-row">
              <span className="flex"></span>
              <div className="cart-tab">
                <span className="no-wrap">tilaa tuotteet&nbsp;|&nbsp;</span>
                <Currency value={this.state.sum}></Currency>
                <IconButton icon={this.state.icon}></IconButton>
              </div>
            </div>

            <div className="cart-header flex layout-center">
              <h3 className="view-title">Ostoskorisi</h3>
            </div>
          </div>

          <div className="cart-body view-body gradient-1">

            <ProductList products={this.state.productList}></ProductList>

            <div className="cart-summary layout-column">
              <div className="layout-row">
                <span>Tuotteita yhteensä:&nbsp;</span>
                <span>{this.state.count}kpl</span>
              </div>

              <Currency value={this.state.sum}></Currency>
              <Button className="flex-80" label="Osta tuotteet"></Button>
            </div>
          </div>
        </ScrollContainer>
      </div>
    );
  }

}

export default Cart;
