import {createStore} from 'redux';
import * as types from '../actions/ActionTypes';
let Immutable = require('immutable');


const initialState = Immutable.fromJS({
  views:{},
  carts:{}
});

let reducer = function(state, action) {
  switch (action.type) {
    case types.CART_ADD:
      let products = state.getIn(['carts',action.id.toString()]) || Immutable.List();
      return state.setIn(['carts',action.id.toString()], products.push(action.product));
      break;

    case types.CART_REMOVE:
      let cart = state.getIn(['carts',action.id.toString()]);
      return cart.delete(cart.indexOf(action.product));
      break;
    }
}

export default window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore(reducer, initialState);
