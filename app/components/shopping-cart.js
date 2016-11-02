import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addOne(item) {
      this.get('shoppingCart').add(item);
    },
    subtractOne(item) {
      this.get('shoppingCart').remove(item);
    },
    removeFromCart(item) {
      this.get('shoppingCart').delete(item);
    }
  }
});
