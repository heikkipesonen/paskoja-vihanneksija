require('./cart.scss');

import React from 'react';
import ScrollContainer from '../ui/ScrollContainer';
import IconButton from '../IconButton';
import DragView from '../ui/DragView';
import ProductList from '../product/ProductList';
import Currency from '../Currency';

import { connect } from 'react-redux';

// @connect(state => ({
//   carts: state.carts
// }))

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
            <Currency value={this.state.total}></Currency>
          </div>
        </div>

        <ScrollContainer className="view-content">
          <ProductList products={this.state.products}></ProductList>

          <Currency value={this.state.total}></Currency>
        </ScrollContainer>

      </DragView>
    );
  }

}

export default Cart;
