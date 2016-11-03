import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    addReview() {
      var params = {
        author: this.get('author'),
        rating: this.get('rating'),
        content: this.get('content'),
        date: moment(),
        item: this.get('item')
      };
      this.set('author', '');
      this.set('content', '');
      this.set('rating', 0);
      this.sendAction('addReview', params);
    }
  }
});
