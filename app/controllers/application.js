import Ember from 'ember';
const { Controller, inject } = Ember;

export default Controller.extend({
  spotifyStore: inject.service(),
  query: null,
  albums: null,
  artists: null,
  tracks: null,

  actions: {
    search() {
      this.get('spotifyStore').search(this.get('query')).then(function(response) {
        console.log(response);
        this.set('albums', response.albums.items.slice(0,5));
        this.set('artists', response.artists.items.slice(0,5));
        this.set('tracks', response.tracks.items.slice(0,5));
      }.bind(this), function(err) {
        this.set('errors', err);
      }.bind(this));
    },
    clear() {
      this.set('albums', null);
      this.set('artists', null);
      this.set('tracks', null);
    }
  }
});
