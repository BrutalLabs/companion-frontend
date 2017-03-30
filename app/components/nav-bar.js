import Ember from 'ember';
const { Component, inject: { service } } = Ember;

export default Component.extend({
  spotifyStore: service(),
  youtubeStore: service(),
  queuePlayer: service(),

  spotifyQuery: null,
  youtubeQuery: null,
  albums: null,
  artists: null,
  tracks: null,

  ytItems: null,

  actions: {
    searchSpotify() {
      this.get('spotifyStore').search(this.get('spotifyQuery')).then(function(response) {
        this.set('albums', response.albums.items.slice(0,5));
        this.set('artists', response.artists.items.slice(0,5));
        this.set('tracks', response.tracks.items.slice(0,5));
      }.bind(this), function(err) {
        this.set('errors', err);
      }.bind(this));
    },
    clearSpotify() {
      this.set('albums', null);
      this.set('artists', null);
      this.set('tracks', null);
    },
    searchYoutube() {
      this.get('youtubeStore').search(this.get('youtubeQuery')).then(function(response) {
        let items = response.items.map(function(item) {
          return {
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.default.url,
            ytid: item.id.videoId
          }
        });
        this.set('ytItems', items);
      }.bind(this), function(err) {
        this.set('errors', err);
      }.bind(this));
    },
    clearYoutube() {
      this.set('ytItems', null);
    },
    addToQueue(track) {
      this.get('queuePlayer').addToQueue(track);
    }
  }
});
