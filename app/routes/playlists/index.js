import Ember from 'ember';
const { Route, inject } = Ember;

export default Route.extend({
  playlistStore: inject.service(),

  model() {
    return this.get('playlistStore').retrieve();
  }
});
