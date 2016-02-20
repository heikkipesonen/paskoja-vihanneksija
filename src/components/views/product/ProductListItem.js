require('./product-list-item.scss');

import React from 'react';
import Currency from '../../Currency';

class ProductListItem extends React.Component {

  render() {
    return (
      <div ref="dragElement" className="product-list-item" onClick={() => this.props.onClick(this.props.product)}>
        <div className="product-content layout-row">
          <div className="product-count">
            <span>{this.props.product.available}</span>
          </div>
          <div className="layout-column product-info-wrapper flex">
            <h4 className="product-title">{this.props.product.name}</h4>
            <h5 className="product-category">{this.props.product.category}</h5>
          </div>
          <div className="layout-column product-price-wrapper">
            <Currency value={this.props.product.package_price}></Currency>
            <h4 className="product-unit flex">{this.props.product.package_size}{this.props.product.unit}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
