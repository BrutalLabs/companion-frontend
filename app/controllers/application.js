import Ember from 'ember';
const { Controller, computed, inject, A } = Ember;

export default Controller.extend({
  queuePlayer: inject.service(),
  queue: computed.alias('queuePlayer.queue')
});
