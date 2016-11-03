import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  inStock: Ember.computed('item.inventory', function() {
    if(this.get('item.inventory') > 0) {
      return true;
    } else {
      return false;
    }
  }),
  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
      this.sendAction('showSidebar');
    }
  }
});
