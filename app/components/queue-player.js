import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
  queue: null,

  playerVars: {
    autoplay: 1
  },

  ytid: null,
  queuePosition: null,

  actions: {
    playFirst() {
      console.log('play first -> ', this.get('queue'));
      let firstInQueue = this.get('queue.firstObject.ytid');
      console.log('whos in the queue -> ', firstInQueue);
      this.set('ytid', firstInQueue);
      this.set('queuePosition', 0);
    },
    next() {
      let queuePosition = this.get('queuePosition');
      let ytid;
      let queue = this.get('queue');
      if (queuePosition + 1 !== queue.length) {
        queuePosition += 1;
        ytid = queue.objectAt(queuePosition).ytid;
        this.set('queuePosition', queuePosition);
        this.set('ytid', ytid);
        console.log('next song');
      } else {
        console.log('end of the queue');
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
        console.log('Previous song');
      } else {
        console.log('First item in queue');
      }
    },
    playTrack(ytid, index) {
      this.set('queuePosition', index);
      this.set('ytid', ytid);
    }
  }
});
