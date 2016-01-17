require('./locationView.scss');

import React from 'react';
import DraggableView from '../DraggableView';
import ScrollView from '../ScrollView';
import LocationTitle from './LocationTitle';
import Cart from './Cart';
import ProductList from '../product/ProductList';


class LocationView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      selectedProducts: []
    };

    this.viewOptions = {
      axis:{
        x:false,
        y:{
          min: 0,
          max: 0,
          tension: true
        }
      }
    };
  }

  componentDidMount() {
    console.log('fuk satan');

    fetch('../data/products.json').then((data) => {
      data.json().then((products) => {
        this.setState({
          products: products
        });
      })
    });
  }

  render() {
    return (
      <DraggableView className="location-view" options={this.viewOptions}>
        <ScrollView className="view-content">
          <LocationTitle location={this.props.location}></LocationTitle>
          <ProductList products={this.state.products}></ProductList>
        </ScrollView>
        <div className="cart-wrapper">
          <Cart products={this.state.selectedProducts}></Cart>
        </div>
      </DraggableView>
    );
  }

}

export default LocationView;
