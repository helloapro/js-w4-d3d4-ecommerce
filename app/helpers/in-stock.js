import Ember from 'ember';

export function inStock(params) {
  if (params[0] === 0) {
    return "Out of stock";
  } else {
    return params[0] + " available";
  }
}

export default Ember.Helper.helper(inStock);
