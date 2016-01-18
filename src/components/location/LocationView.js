require('./locationView.scss');

import React from 'react';
import ScrollView from '../ScrollView';
import LocationTitle from './LocationTitle';
import Cart from './Cart';
import ProductList from '../product/ProductList';
import DragView from '../helpers/DragView';


class LocationView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      selectedProducts: [],
      visible: false
    };

    this.viewOptions = {
      leaveAnimationDuration: 300,
			returnAnimationDuration: 300,
      axis:{
        x:false,
        y:{
          min: 0,
          max: window.innerHeight,
          tension: true
        }
      }
    };
  }

  componentDidMount() {
    this.dragView = new DragView(this.refs.draggable, this.viewOptions);
    this.dragView.setOffset({y: this.viewOptions.axis.y.max}, 0);

    fetch('../data/products.json').then((data) => {
      data.json().then((products) => {
        this.setState({
          products: products
        });
      })
    });
  }

  componentWillUnmount(){
    this.draggable.destroy();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible === true){
      this.dragView.setOffset({y: this.viewOptions.axis.y.min}, 300);
    }
  }

  render() {
    let classNames = this.props.location ? 'location-theme-' + this.props.location.type + ' ' : '';

    return (
      <div ref="draggable" className={classNames + 'location-view'}>
        <ScrollView className="view-content">
        {(()=>{
          if (this.props.location) {
              return ([
                <LocationTitle key="locationTitle" location={this.props.location}></LocationTitle>,
                <ProductList key="productList" products={this.state.products}></ProductList>
              ]);
            }
        })()}
        </ScrollView>
        <div className="cart-wrapper">
          <Cart products={this.state.selectedProducts}></Cart>
        </div>
      </div>
    );
  }

}

export default LocationView;
