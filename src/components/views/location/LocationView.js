require('./locationView.scss');

import React from 'react';
import DragView from '../../ui/DragView';
import ScrollContainer from '../../ui/ScrollContainer';
import LocationTitle from './LocationTitle';
import Input from '../../ui/Input';
import Cart from './Cart';
import ProductList from '../product/ProductList';

import Firebase from 'firebase';

class LocationView extends DragView {
  constructor(props) {
    super(props);

    this.state = {
      location: null,

      filter: '',

      productsRef: null,
      products: [],
      selectedProducts: [],

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.location && nextProps.location !== this.props.location){



      this.setState({
        location: nextProps.location,
        y: this.options.min_y,
        animation: this.options.animationDuration
      });
    }
  }

  componentDidMount() {
    super.componentDidMount();
    fetch('../data.json').then((blob) => {
      blob.json().then((data) => {
        console.log(data.products);
      });
    })

    // fetch('../data/products.json').then((data) => {
    //   data.json().then((products) => {
    //     this.setState({
    //       products: products
    //     });
    //   })
    // });
  }

  onProductClick = (product) => {

    // make store here
    // to add things into carts
    this.setState({
      selectedProducts: [...this.state.selectedProducts, product]
    });

  };

  filterChange = (value) => {
    this.setState({
      filter: value
    });
  };

  filter (product){
    return product.name.indexOf(this.state.filter) > -1;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.location !== this.props.location ||
      nextState.y !== this.state.y ||
      nextState.x !== this.state.x ||
      nextState.animation !== this.state.animation ||
      nextState.selectedProducts.length !== this.state.selectedProducts.length ||
      nextState.filter !== this.state.filter;
  }

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
                    return ([
                      <div className="column-2" key="search">
                        <Input onChange={this.filterChange} icon="search" label="Suodata"></Input>
                      </div>,
                      <ProductList key="productList" products={this.state.products.filter((product) => this.filter(product))} onClick={this.onProductClick}></ProductList>
                    ]);
                  }
              })()}
            </div>
          </div>

        </ScrollContainer>
        <Cart products={this.state.selectedProducts}></Cart>
      </div>
    );
  }

}

export default LocationView;
