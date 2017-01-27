import Ember from 'ember';
const { Service, inject, $ } = Ember;

export default Service.extend({
  spotify: inject.service(),

  search(query) {
    return this.get('spotify').request(`/v1/search?q=${query}&type=album,track,artist`)
  }

});
