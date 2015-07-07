
'use strict';

angular.module('flickrNgSpaApp')
  .factory('configService', function () {
    var API_KEY = "15b6709e54ae9bc22a00b3cbf8d48eec";
    return {
      getAPIKey: function(){
        return API_KEY;
      }
    };
  });