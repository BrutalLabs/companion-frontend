import Ember from 'ember';
const { Component, computed, inject } = Ember;

export default Component.extend({
  queuePlayer: inject.service(),

  queue: computed.alias('queuePlayer.queue'),
  queuePosition: computed.alias('queuePlayer.queuePosition'),

  volume: 100,

  playerVars: {
    autoplay: 1
  },

  ytid: null,

  actions: {
    playFirstInQueue() {
      this.set('ytid', this.get('queue.firstObject.ytid'));
      this.set('queuePosition', 0);
    },
    next() {
      let queuePosition = this.get('queuePosition');
      let queue = this.get('queue');
      if (queuePosition + 1 !== queue.length) {
        queuePosition += 1;
        let ytid = queue.objectAt(queuePosition).ytid;
        this.set('queuePosition', queuePosition);
        this.set('ytid', ytid);
      }
    },
    previous() {
      let queuePosition = this.get('queuePosition');
      let ytid;
      let queue = this.get('queue');
      if (queuePosition !== 0) {
        queuePosition -= 1;
        ytid = queue.objectAt(queuePosition).ytid;
        this.set('queuePosition', queuePosition);
        this.set('ytid', ytid);
      }
    },
    playTrack(ytid, index) {
      this.set('queuePosition', index);
      this.set('ytid', ytid);
    },
    volumeUp() {
      if ((this.get('volume') + 10) <= 100) {
        this.set('volume', this.get('volume') + 10);
      } else {
        this.set('volume', 100);
      }
    },
    volumeDown() {
      if ((this.get('volume') - 10) >= 0) {
        this.set('volume', this.get('volume') - 10);
      } else {
        this.set('volume', 0);
      }
    },
    removeFromQueue(index) {
      this.get('queuePlayer').removeFromQueue(index);
    }
  }
});
