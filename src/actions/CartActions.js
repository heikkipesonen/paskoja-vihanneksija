import * as types from './ActionTypes';

export function add(id, product) {
  return {
    type: types.CART_ADD,
    id,
    product
  };
}

export function remove(id, product) {
  return {
    type: types.CART_REMOVE,
    id,
    product
  };
}
