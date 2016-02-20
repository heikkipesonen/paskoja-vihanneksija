require('./product-list.scss');

import React from 'react';
import ProductListItem from './ProductListItem';
import {Map} from 'immutable';


class ProductList extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      list: new Map()
    };
  }

  componentDidMount() {
    this.setState({
      list: new Map(this.props.products)
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      list: new Map(nextProps.products)
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.list !== this.state.list;
  }

  render() {
    return (
      <div className="product-list layout-column">
        {(()=>{
          return this.state.list.map((product, key) => {
            return (<ProductListItem product={product} key={key} onClick={(product) => this.props.onClick(key)}></ProductListItem>);
          }).toArray();
        })()}
      </div>
    );
  }
}

export default ProductList;
