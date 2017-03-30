import Ember from 'ember';
const { Route, inject: { service } } = Ember;

export default Route.extend({
  playlistStore: service(),
  queuePlayer: service(),

  model(params) {
    return this.get('playlistStore').retrieveById(params.reference);
  },

  actions: {
    addToQueue(track) {
      this.get('queuePlayer').addToQueue(track);
    }
  }
});
