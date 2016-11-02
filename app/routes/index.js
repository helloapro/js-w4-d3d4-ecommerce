import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('item');
  },
  actions: {
    showSidebar() {
      $('.ui.sidebar').sidebar('setting', { dimPage: false, closable: false});
      $('.ui.sidebar').sidebar('show');
    }
  }
});
