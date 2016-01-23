require('./locationView.scss');

import React from 'react';
import DragView from '../ui/DragView';
import ScrollContainer from '../ui/ScrollContainer';
import LocationTitle from './LocationTitle';
// import LocationImage from './LocationImage';
import Cart from './Cart';
import ProductList from '../product/ProductList';
import store from '../../stores/store';
import * as cart from '../../actions/CartActions'

class LocationView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      selectedProducts: [],
      visible: false,
      viewMaxY: window.innerHeight - 50,
      viewMinY: 0
    };
  }

  componentDidMount() {
    fetch('../data/products.json').then((data) => {
      data.json().then((products) => {
        this.setState({
          products: products
        });
      })
    });
  }

  onProductClick = (product) => {

    // make store here
    // to add things into carts
    this.setState({
      selectedProducts: [...this.state.selectedProducts, product]
    });

    console.log(this.state);
  };

  render() {
    let classNames = this.props.location ? 'location-theme-' + this.props.location.type + ' ' : '';

    return (
      <DragView initialPosition={this.state.viewMaxY} maxY={this.state.viewMaxY} minY={this.state.viewMinY} className={classNames + 'location-view'}>
        <ScrollContainer className="view-content flex layout-column">
          <div className="location-content flex layout-column">
            <div className="location-header"></div>
            <div className="location-body flex">
            {(()=>{
              if (this.props.location) {
                  return ([
                    <LocationTitle key="locationTitle" location={this.props.location}></LocationTitle>,
                    <ProductList key="productList" products={this.state.products} onClick={this.onProductClick}></ProductList>
                  ]);
                }
            })()}
            </div>
          </div>
        </ScrollContainer>

      <Cart products={this.state.selectedProducts}></Cart>

      </DragView>
    );
  }

}

export default LocationView;
