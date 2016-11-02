import Ember from 'ember';

export function inStockButton(params) {
  if (params[0] !== 0) {
    return ("<button class='btn pull-right' {{action 'addToCart' item}}>Buy</button>").htmlSafe();
  }
}

export default Ember.Helper.helper(inStockButton);
