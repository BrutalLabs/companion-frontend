import Ember from 'ember';

const { Component, inject: { service } } = Ember;

export default Component.extend({
  playlistStore: service(),

  name: null,
  owner: null,

  actions: {
    create() {
      this.get('playlistStore').create(this.get('name'), this.get('owner')).then(function(response) {
        console.log(response);
      }.bind(this), function(error) {
        console.log(error);
      }.bind(this));
    }
  }

})
