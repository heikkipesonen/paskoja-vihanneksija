require('./product-list.scss');

import React from 'react';
import ProductListItem from './ProductListItem';

class ProductList extends React.Component {
  onClick = (...args) => {
    if (this.props.onClick) {
     this.props.onClick(args);
    }
    console.log(...args);
  };

  render() {
    return (
      <div className="product-list layout-column">
        {this.props.products.map((product, productIndex) => {
          return (<ProductListItem product={product} key={productIndex} onClick={this.onClick}></ProductListItem>);
        })}
      </div>
    );
  }
}

export default ProductList;
