import Ember from 'ember';
const { Service, inject, A} = Ember;

export default Service.extend({
  queue: A(),
  queuePosition: 0,

  addToQueue(track) {
    let queueTrack = {
      name: track.title,
      ytid: track.ytid
    };
    this.get('queue').pushObject(queueTrack);
  },

  removeFromQueue(index) {
    // TODO perform verifications when video is playing
    this.get('queue').removeAt(index);
  }
});
