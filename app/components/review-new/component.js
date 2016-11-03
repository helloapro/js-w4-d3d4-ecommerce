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
      this.sendAction('addReview', params);
    }
  }
});
