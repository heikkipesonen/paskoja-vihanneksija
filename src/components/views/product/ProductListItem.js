require('./product-list-item.scss');

import React from 'react';
import Currency from '../../Currency';
import DragElement from '../../ui/DragElement';

class ProductListItem extends DragElement {
  constructor(props){
    super(props);

    this.setOptions({
      x: true,
      y: false,
      max_x: 100,
      max_y: 0,
      min_x: -100,
      min_y: 0,
       // rubberband effect when out of bounds
      tension:{
        top: 0,
        left: 0.3,
        right: 0.3,
        bottom: 0
      },
      animationDuration: 300 // default animation duration
    });
  }

  dragEnd = (evt) => {
    evt.stopPropagation();



    let dmaxx = Math.abs(this.state.x - this.options.max_x);
    let dminx = Math.abs(this.options.min_x - this.state.x);

    console.log(dmaxx, dminx);

    let x = dmaxx < this.state.x ? this.options.max_x : dminx < Math.abs(this.state.x) ? this.options.min_x : 0;
    let animation = x !== this.state.x ? this.options.animationDuration : 0;

    this.setState({
      animation: animation,
      x: x,
      y: 0,
      direction: false
    });

    this.lastEvent = false;
  };

  render() {
    let style = {};

    if (this.state.x > 0 || this.state.x < 0 || this.state.animation) {
      style = this.getElementStyle();
    }

    return (
      <div ref="dragElement" className="product-list-item" onClick={() => this.props.onClick(this.props.product)}>
        <div className="product-content layout-row"  style={style}>
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
      </div>
    );
  }
}

export default ProductListItem;
