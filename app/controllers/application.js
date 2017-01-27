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
      let query = this.get('query');

      this.get('spotifyStore').search(query).then(function(response) {
        console.log(response);
        this.set('albums', response.albums);
        this.set('artists', response.artists);
        this.set('tracks', response.tracks)
      }.bind(this), function(err) {
        console.log('err -> ', err);
      }.bind(this));
    },
    clear() {
      this.set('albums', null);
      this.set('artists', null);
      this.set('tracks', null);
    }
  }

});
