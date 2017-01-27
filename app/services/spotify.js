import AjaxService from 'ember-ajax/services/ajax';
import config from '../config/environment';

export default AjaxService.extend({
  host: config.APP.spotifyApi.host
  //
  // headers: computed({
  //   get() {
  //     let headers = {};
  //
  //     this.get('session').authorize('authorizer:application', function(headerName, headerValue) {
  //       headers[headerName] = headerValue;
  //     });
  //
  //     return headers;
  //   }
  //
  //
  // })
});
