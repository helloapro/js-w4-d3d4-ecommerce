import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('item');
  },
  actions: {
    showSidebar() {
      Ember.$('.ui.sidebar').sidebar('setting', { dimPage: false, closable: false});
      Ember.$('.ui.sidebar').sidebar('show');
      Ember.$('.container').addClass('shrink');
    }
  }
});
