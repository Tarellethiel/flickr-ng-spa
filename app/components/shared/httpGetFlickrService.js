'use strict';

angular.module('flickrNgSpaApp')
.factory('httpGetFlickrService', function (configService, $http)  { 
   return $http({
        method: 'GET',
        url: 'https://api.flickr.com/services/rest/',
        params: {
          method: 'flickr.photos.getRecent',
          format: 'json',
          api_key: configService.getAPIKey(),
          nojsoncallback: 1,
        }}) ,{cache: true };});


