import Ember from 'ember';
const { Route, inject } = Ember;

export default Route.extend({
  playlistStore: inject.service(),

  model(params) {
    return this.get('playlistStore').retrieveById(params.reference);
  }
});
