import Ember from 'ember';
const { Service, inject} = Ember;

export default Service.extend({
  ajax: inject.service(),

  retrieve() {
    return this.get('ajax').request('/playlists');
  }
});
