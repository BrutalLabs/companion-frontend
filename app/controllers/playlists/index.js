import Ember from 'ember';
const {
  Controller,
  computed
} = Ember;

export default Controller.extend({
  model: null,
  playlists: computed.alias('model')
});
