import Ember from 'ember';
const { Route, inject } = Ember;

export default Route.extend({
  playlistStore: inject.service(),

  model() {
    return this.get('playlistStore').retrieve();
  },

  actions: {
    delete(id) {
      this.get('playlistStore').delete(id).then(function(response) {
        console.log(response);
      }.bind(this), function(error) {
        console.log(error);
      }.bind(this));
    }
  }
});
