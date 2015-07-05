
  (function(){
   'use strict';
 angular.module('flickrNgSpaApp')
  .controller('detailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
      $http({
        method: 'GET',
        url:'https://api.flickr.com/services/rest/',
        params:{
        photo_id: $routeParams.id,
        method: 'flickr.photos.getInfo',
        format: 'json',
        api_key: '15b6709e54ae9bc22a00b3cbf8d48eec',
        nojsoncallback:1
        }
      }).success(function(data)
      {
        $scope.photoInfo = data;
      }).error(function(error){console.error(error);
      });
       $http({
        method: 'GET',
        url:'https://api.flickr.com/services/rest/',
        params:{
        photo_id: $routeParams.id,
        method: 'flickr.photos.comments.getList',
        format: 'json',
        api_key: '15b6709e54ae9bc22a00b3cbf8d48eec',
        nojsoncallback:1
        }
      }).success(function(data)
      {
        $scope.PhotoComments = data.comments.comment;
      }).error(function(error){console.error(error);
      });

  
 } ]);
 })();
  