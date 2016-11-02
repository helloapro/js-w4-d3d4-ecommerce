import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  price: 0.00,

  includes(item) {
    return this.get('items').includes(item);
  },
  add(item) {
    if(item.get('inCart')) {
      alert('item already in cart!');
    } else if (item.get('inventory') > 0) {
      this.get('items').pushObject(item);
      item.set('inventory', (item.get('inventory')-1));
      var newPrice = parseFloat(this.get('price')) + parseFloat(item.get('price'));
      this.set('price', newPrice.toFixed(2));
    } 

  },
  remove(item) {
    this.get('items').removeObject(item);
    item.set('inventory', (item.get('inventory')+1));
    var newPrice = parseFloat(this.get('price')) - parseFloat(item.get('price'));
    this.set('price', newPrice.toFixed(2));
  }
});
