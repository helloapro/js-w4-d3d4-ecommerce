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
    },
    checkout() {
      var _this = this;
      this.get('shoppingCart.items').forEach(function(item) {
        item.set('numberInCart', 0);
        item.save();
        Ember.$('.ui.sidebar').sidebar('hide');
        Ember.$('.container').removeClass('shrink');
        _this.get('shoppingCart.items').removeObject(item);
        _this.set('shoppingCart.price', 0);
      });
      $('.ui.modal').modal('show');
    }
  }
});
