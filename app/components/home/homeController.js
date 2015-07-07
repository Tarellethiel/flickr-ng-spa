(function () {
  'use strict';
  angular.module('flickrNgSpaApp')
    .controller('homeController', ['configService','sharedScope', '$scope', '$http', '$q', function (configService, sharedScope, $scope, $http, $q) {

    $scope.$watch(function () {
      return sharedScope.getFilter();
    },
      function (newValue, oldValue) {
        if (newValue !== oldValue) $scope.filter = newValue;
      });


    $scope.getHttp = function () {
      var defer = $q.defer();
      $http({
        method: 'GET',
        url: 'https://api.flickr.com/services/rest/',
        params: {
          method: 'flickr.photos.getRecent',
          format: 'json',
          api_key: configService.getAPIKey(),
          nojsoncallback: 1,
        }
      }).success(function (data, status, headers, config) {
        defer.resolve(data);
        $scope.photos = data;
      }).error(function (data, status, headers, config) {
        defer.reject();
      });
      return defer.promise;
    } ();
  }]);
})();
  
  
  