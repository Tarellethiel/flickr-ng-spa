(function () {
  'use strict';
  angular.module('flickrNgSpaApp')
    .controller('userController', ['$q', 'configService', 'sharedScope', '$scope', '$http', '$routeParams', function ($q, configService, sharedScope, $scope, $http, $routeParams) {

    $scope.$watch(function () {
      return sharedScope.getFilter();
    },
      function (newValue, oldValue) {
        if (newValue !== oldValue) $scope.filter = newValue;
      });

    $scope.getPhotos = function () {
      var defer = $q.defer();
      $http({
        method: 'GET',
        url: 'https://api.flickr.com/services/rest/',
        params: {
          method: 'flickr.people.getPhotos',
          format: 'json',
          api_key: configService.getAPIKey(),
          nojsoncallback: 1,
          user_id: $routeParams.nsid
        }
      }).success(function (data, status, headers, config) {
        defer.resolve(data);
        $scope.userPhotos = data;
      }).error(function (data, status, headers, config) {
        defer.reject();
      });
      return defer.promise;
    } ();

    $scope.getInfo = function () {
      var defer = $q.defer();
      $http({

        method: 'GET',
        url: 'https://api.flickr.com/services/rest/',
        params: {
          method: 'flickr.people.getInfo',
          format: 'json',
          api_key: configService.getAPIKey(),
          nojsoncallback: 1,
          user_id: $routeParams.nsid
        }
      }).success(function (data, status, headers, config) {
        defer.resolve(data);
        $scope.userInfo = data;
      }).error(function (data, status, headers, config) {
        defer.reject();
      });
      return defer.promise;
    } ();


  }]);
})();
  