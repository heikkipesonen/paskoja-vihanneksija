require('./product-list.scss');

import React from 'react';
import ProductListItem from './ProductListItem';

class ProductList extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.products !== nextProps.products;
  }

  render() {
    return (
      <div className="product-list layout-column">
        {this.props.products.map((product, productIndex) => {
          return (<ProductListItem product={product} key={productIndex} onClick={(product) => this.props.onClick(product)}></ProductListItem>);
        })}
      </div>
    );
  }
}

export default ProductList;
