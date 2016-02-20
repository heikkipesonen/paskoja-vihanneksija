require('./locationView.scss');

import React from 'react';
import DragView from '../../ui/DragView';
import ScrollContainer from '../../ui/ScrollContainer';
import LocationTitle from './LocationTitle';
import Input from '../../ui/Input';
import Timespan from '../../ui/Timespan';
import Cart from './Cart';
import ProductList from '../product/ProductList';

import {Time} from '../../helpers/Time';

import config from '../../../config';
import Firebase from 'firebase';

import {Map} from 'immutable';

class LocationView extends DragView {
  constructor(props) {
    super(props);

    this.state = {
      location: null,

      products: new Map(),
      cart: new Map(),

      deliveryDates: {},
      currentDelivery: null,

      direction: false, // current drag direction
      x: 0,
      y: window.innerHeight - 50,
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
      max_y: window.innerHeight - 50,
      min_y: 0,
      tension: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0.3
      }
    });
  }

  componentWillMount() {
    // this.locationRef =
  }

  updateLocation(location){

    this.setState({
      products: new Map(),
      cart: new Map(),
      location: location,
      y: this.options.min_y,
      animation: this.options.animationDuration
    });

    this.deliveryRef = new Firebase(config.url + '/deliveries/' + location.id);
      // .orderByChild('start_datetime')
    this.deliveryRef.once('value', (snapshot) => {
        // let dates = snapshot.val();
        // let deliveries = Object.keys(dates).map((dateId) => {
        //   dates[dateId].id = dateId;
        //   return dates[dateId];
        // });
        //
        // fetch('../data/products.json').then((blob) => {
        //   let productsRef = new Firebase(config.url + '/products');
        //   blob.json().then((data) => {
        //     console.log(data);
        //
        //     deliveries.forEach((delivery) => {
        //       let dref = productsRef.child(delivery.id);
        //
        //       data.forEach((product) => {
        //         dref.push().set(product);
        //       });
        //     });
        //   });
        // });
        //
        // deliveries.sort((a,b) => {
        //   return a.start_datetime - b.start_datetime;
        // });

        let deliveries = snapshot.val();
        this.setState({
          deliveryDates: deliveries,
          currentDelivery: deliveries[Object.keys(deliveries)[0]]
        });

        this.getProducts(Object.keys(deliveries)[0]);
      });
  }

  getProducts(deliveryId) {
    if (this.productsRef){
      this.productsRef.off();
    }

    this.productsRef = new Firebase(config.url + '/products/' + deliveryId);
    this.productsRef.on('value', (snapshot) => {

      console.log('PRODUCTS VALUE UPDATED',snapshot.val());
      this.setState({
        products: new Map(snapshot.val())
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location && nextProps.location !== this.props.location){
      console.log(this.props.location);


      this.updateLocation(nextProps.location);
    }
  }

  componentDidMount() {
    super.componentDidMount();

    if (this.props.location){
      this.updateLocation(this.props.location);
    }
  }

  addProduct(id) {
    let product = this.state.products.get(id);
    let cart = this.state.cart;

    if (!cart.has(id)){
      product.count = 1;
      cart = cart.set(id, product);
    } else {
      let cartProduct = cart.get(id);
      cartProduct.count++;

      cart = cart.set(id, cartProduct);
    }

    this.setState({
      cart: cart
    });

    console.log(cart.toArray());
  }

  onProductClick = (productId) => {
    this.productsRef.child(productId).transaction((current) => {
      if (current.available > 0){
          current.available--;
          return current;
      }
      return;
    }, (error, success) => {
      console.log(error, success);

      if (success) {
        this.addProduct(productId);
      }
    })
    console.log(productId);
  };

  render() {
    return (
      <div
        ref="dragElement"
        style={this.getElementStyle()}
        className={`drag-view view layout-column location-view ${this.getClassNames()}`}>

        <ScrollContainer
          disabled={this.state.y !== this.options.min_y}
          className="view-content flex">

          <div className="content-wrapper">
            <div className="location-header view-header layout-column gradient-1-enter">
              <div className="flex"></div>
              {(()=>{
                if (this.props.location) {
                  return (<LocationTitle key="locationTitle" location={this.state.location}></LocationTitle>);
                }
              })()}
            </div>

            <div className="location-body view-body gradient-1">

              {(()=>{
                if (this.props.location) {
                  return (
                    <div className="product-list-wrapper">
                      <div className="layout-center layout-column">
                        <h3 className="sub-title">Noutoaika</h3>
                        <Timespan className="layout-column layout-center" timespan={this.state.currentDelivery}></Timespan>
                      </div>
                      <ProductList products={this.state.products} onClick={this.onProductClick}></ProductList>
                    </div>
                  );
                }
              })()}
            </div>
          </div>

        </ScrollContainer>

        <Cart products={this.state.cart}></Cart>
      </div>
    );
  }

}

export default LocationView;
