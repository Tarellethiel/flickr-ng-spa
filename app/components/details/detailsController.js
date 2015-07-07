
(function () {
  'use strict';
  angular.module('flickrNgSpaApp')
    .controller('detailsController', ['configService', '$q', '$scope', '$http', '$routeParams', function (configService, $q, $scope, $http, $routeParams) {

    $scope.getInfo = function () {
      var defer = $q.defer();
      $http({
        method: 'GET',
        url: 'https://api.flickr.com/services/rest/',
        params: {
          photo_id: $routeParams.id,
          method: 'flickr.photos.getInfo',
          format: 'json',
          api_key: configService.getAPIKey(),
          nojsoncallback: 1
        }
      }).success(function (data, status, headers, config) {
        defer.resolve(data);
        $scope.photoInfo = data;
      }).error(function (data, status, headers, config) {
        defer.reject();
      });
      return defer.promise;
    } ();

    $scope.getList = function () {
       var defer = $q.defer();
      $http({
        method: 'GET',
        url: 'https://api.flickr.com/services/rest/',
        params: {
          photo_id: $routeParams.id,
          method: 'flickr.photos.comments.getList',
          format: 'json',
          api_key: configService.getAPIKey(),
          nojsoncallback: 1
        }
      }).success(function (data, status, headers, config) {
        defer.resolve(data);
        $scope.PhotoComments = data.comments.comment;
      }).error(function (data, status, headers, config) {
        defer.reject();
      });
      return defer.promise;
    } ();


  }]);
})();
  