import Ember from 'ember';
const { Service, inject} = Ember;

export default Service.extend({
  ajax: inject.service(),

  search(query) {
    return this.get('ajax').request(`/search?part=snippet&q=${query}&key=AIzaSyDjOAj5xACneaZPJHuDGDltVxIzU_csXgQ`, {
      host: 'https://content.googleapis.com/youtube/v3'
    });
  }
});
