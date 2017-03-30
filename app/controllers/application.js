import Ember from 'ember';
const { Controller, computed, inject, A } = Ember;

export default Controller.extend({
  spotifyStore: inject.service(),
  youtubeStore: inject.service(),
  queuePlayer: inject.service(),

  queue: computed.alias('queuePlayer.queue'),
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
            id: item.id.videoId
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
    addToQueue(item) {
      let queueItem = {
        name: item.title,
        ytid: item.id
      };
      let queue = this.get('queue');
      queue.pushObject(queueItem);
      this.set('queue', queue);
    }
  }
});
