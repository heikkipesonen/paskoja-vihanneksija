require('./cart.scss');

import React from 'react';
import ScrollContainer from '../ui/ScrollContainer';
import IconButton from '../IconButton';
import DragView from '../ui/DragView';
import ProductList from '../product/ProductList';
import Currency from '../Currency';
import Button from '../Button';

// import { connect } from 'react-redux';

// @connect(state => ({
//   carts: state.carts
// }))

class Cart extends DragView {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      productCount: 0,
      producersCount: 0,
      total: 0,
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

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.location !== this.props.location ||
      nextState.y !== this.state.y ||
      nextState.x !== this.state.x ||
      nextState.animation !== this.state.animation ||
      nextProps.products.length !== this.props.products.length;
  }

  componentWillReceiveProps(nextProps) {
    this.updateProductList(nextProps.products);
  }

  updateProductList(productList) {
    productList = productList || this.state.products;
    let uniqueProductsList = [];

    productList.forEach((product) => {
      let hasProduct = uniqueProductsList.find((a) => { return a.id === product.id});
      if (hasProduct){
        hasProduct.available++;
      } else {
        let newProduct = Object.assign({}, product);
        newProduct.available = 1;
        uniqueProductsList.push(newProduct);
      }
    });

    this.setState({
      products: uniqueProductsList,
      productCount: productList.length,
      total: uniqueProductsList.reduce((a,b) => {
        return a + b.price * b.available;
      }, 0)
    });
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

          <div className="view-header gradient-1 layout-column">
            <div className="cart-title layout-row">
              <span className="flex"></span>
              <div className="cart-tab">
                <span className="no-wrap">tilaa tuotteet&nbsp;|&nbsp;</span>
                <Currency value={this.state.total}></Currency>
                <IconButton icon={this.state.icon}></IconButton>
              </div>
            </div>

            <div className="cart-header flex layout-center">
              <h3 className="view-title">Ostoskorisi</h3>
            </div>
          </div>

          <div className="cart-body view-body gradient-1">

            <ProductList products={this.state.products}></ProductList>

            <div className="cart-summary layout-column">
              <div className="layout-row">
                <span>Tuotteita yhteensä:&nbsp;</span>
                <span>{this.state.productCount}kpl</span>
              </div>

              <Currency value={this.state.total}></Currency>
              <Button className="flex-80" onClick={this.login} label="Osta tuotteet"></Button>
            </div>
          </div>
        </ScrollContainer>
      </div>
    );
  }

}

export default Cart;
