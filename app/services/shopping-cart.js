import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  price: 0.00,

  includes(item) {
    return this.get('items').includes(item);
  },
  add(item) {
    if (item.get('inventory') > 0) {
      if(item.get('inCart') === false) {
        this.get('items').pushObject(item);
      }
      item.set('inventory', (item.get('inventory')-1));
      item.set('numberInCart', item.get('numberInCart') + 1);
      var newPrice = parseFloat(this.get('price')) + parseFloat(item.get('price'));
      this.set('price', newPrice.toFixed(2));
    }
  },
  remove(item) {
    if (item.get('numberInCart') === 1) {
      this.get('items').removeObject(item);
    }
    item.set('inventory', (item.get('inventory')+1));
    item.set('numberInCart', item.get('numberInCart') - 1);
    var newPrice = parseFloat(this.get('price')) - parseFloat(item.get('price'));
    this.set('price', newPrice.toFixed(2));
  },
  delete(item) {
    this.get('items').removeObject(item);
    item.set('inventory', (item.get('inventory')+item.get('numberInCart')));
    var newPrice = parseFloat(this.get('price')) - parseFloat(item.get('price') * item.get('numberInCart'));
    this.set('price', newPrice.toFixed(2));
    item.set('numberInCart', 0);
  }
});
