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

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disableScroll: true,
      products: [],
      productCount: 0,
      producersCount: 0,
      total: 0,
      icon: 'ios-arrow-up',


      viewOptions: {
        initialPosition: window.innerHeight - 50,
        classTolerance: 50,
        changeVelocity: 0.2,
        max_y: window.innerHeight - 50,
        min_y: 0,
        tension: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0.3
        }
      }
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

  onViewStateChange = (state) => {
    console.log(state);
    if (state.y === 0) {
      this.setState({
        disableScroll: false
      });
    } else {
      this.setState({
        disableScroll: true
      });
    }
  };

  render() {
    return (
      <DragView
        options={this.state.viewOptions}
        onStateChange={this.onViewStateChange}
        className="cart">
        <ScrollContainer className="view-content" disabled={this.state.disableScroll}>
          <div className="cart-title view-header bg-secondary layout-row">
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

          <div className="cart-body view-body bg-secondary">

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

      </DragView>
    );
  }

}

export default Cart;
