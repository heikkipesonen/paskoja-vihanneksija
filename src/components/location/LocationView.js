require('./locationView.scss');

import React from 'react';
import DragView from '../ui/DragView';
import ScrollContainer from '../ui/ScrollContainer';
import LocationTitle from './LocationTitle';
import Input from '../Input';
// import LocationImage from './LocationImage';
import Cart from './Cart';
import ProductList from '../product/ProductList';
// import store from '../../stores/store';
// import * as cart from '../../actions/CartActions'

class LocationView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: '',
      disableScroll: true,
      products: [],
      selectedProducts: [],
      visible: false,

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

  };

  viewStateChange = (state) => {
    console.log(state);
    this.setState({
      disableScroll: state.y !== 0
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

  render() {
    let classNames = this.props.location ? 'location-theme-' + this.props.location.type + ' ' : '';

    return (
      <DragView
        onStateChange={this.viewStateChange}
        options={this.state.viewOptions}
        className={classNames + 'view location-view layout-column'}>

        <ScrollContainer
          disabled={this.state.disableScroll}
          className="view-content flex">

          <div className="location-header view-header layout-column">
            <div className="flex"></div>
            {(()=>{
              if (this.props.location) {
                  return (<LocationTitle key="locationTitle" location={this.props.location}></LocationTitle>);
              }
            })()}
          </div>

          <div className="location-body view-body">
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



        </ScrollContainer>

        <Cart products={this.state.selectedProducts}></Cart>

      </DragView>
    );
  }

}

export default LocationView;
