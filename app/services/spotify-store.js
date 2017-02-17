import Ember from 'ember';
const { Service, inject} = Ember;

export default Service.extend({
  ajax: inject.service(),

  search(query) {
    return this.get('ajax').request(`/spotify/search?q=${query}`);
  }
});
