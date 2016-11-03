import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  features: DS.attr(),
  price: DS.attr(),
  inventory: DS.attr(),
  image: DS.attr(),
  numberInCart: DS.attr(),
  reviews: DS.hasMany('review', {async:true}),

  shoppingCart: Ember.inject.service(),
  inCart: Ember.computed('shoppingCart.items.[]', function(){
    return this.get('shoppingCart').includes(this);
  })
});
