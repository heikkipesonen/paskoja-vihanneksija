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
