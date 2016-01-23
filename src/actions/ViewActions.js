import * as types from './ActionTypes';

export function openView(id) {
  return {
    type: types.OPEN_VIEW,
    id
  };
}

export function closeView(id) {
  return {
    type: types.CLOSE_VIEW,
    id
  };
}

export function cartAdd(id, product) {
  return {
    type: types.CART_ADD,
    id,
    product
  };
}

export function cartRemove(id, product) {
  return {
    type: types.CART_REMOVE,
    id,
    product
  };
}
