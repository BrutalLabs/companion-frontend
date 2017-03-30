import Ember from 'ember';
const { Service, inject} = Ember;

export default Service.extend({
  ajax: inject.service(),

  retrieve() {
    return this.get('ajax').request('/playlists');
  },
  retrieveById(id) {
    return this.get('ajax').request(`/playlists/${id}`);
  },
  create(name, owner) {
    return this.get('ajax').post('playlists/new', {
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        playlist: {
          name,
          owner
        }
      })
    });
  },
  delete(id) {
    console.log(id);
    return this.get('ajax').delete(`playlists/${id}/delete`);
  }
});
