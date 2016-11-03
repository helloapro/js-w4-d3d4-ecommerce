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
  totalRating: DS.attr(),
  aveRating: Ember.computed('totalRating', function() {
    console.log(this.get('totalRating') + ', ' + this.get('reviews.length'));
    return parseInt(this.get('totalRating')/this.get('reviews.length'));
  }),

  shoppingCart: Ember.inject.service(),
  inCart: Ember.computed('shoppingCart.items.[]', function(){
    return this.get('shoppingCart').includes(this);
  })
});
