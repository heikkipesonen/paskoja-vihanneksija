require('./product-list-item.scss');

import React from 'react';
import Currency from '../Currency';

class ProductListItem extends React.Component {
  render() {
    return (
      <div className="product-list-item layout-row" onClick={() => this.props.onClick(this.props.product)}>
        <div className="product-count">
          <span>{this.props.product.available}</span>
        </div>
        <div className="layout-column product-info-wrapper flex">
          <h4 className="product-title">{this.props.product.name}</h4>
          <h4 className="product-producer">{this.props.product.producer_id}</h4>
        </div>
        <div className="layout-column product-price-wrapper">
          <Currency value={this.props.product.price}></Currency>
          <h4 className="product-unit flex">{this.props.product.package_size}{this.props.product.unit}</h4>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
