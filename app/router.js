import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('playlists', { path: '/playlists'}, function() {
    this.route('index', { path: '/'});
    this.route('detail', { path: '/:reference'});
  });
});

export default Router;
