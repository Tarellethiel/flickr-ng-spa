'use strict';

angular.module('flickrNgSpaApp')
  .filter('flickrURL', function () {
    return function (input, dimension) {
      var url = 'http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg';
      return  url.replace('{farm-id}', input.farm)
        .replace('{server-id}', input.server)
        .replace('{id}', input.id)
        .replace('{secret}', input.secret)
        .replace('[mstzb]', dimension);
    };
  });