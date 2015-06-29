 (function(){
   'use strict';
 angular.module('flickrNgSpaApp')
  .controller('homeController', ['$scope', '$http', function($scope, $http){
    
    $scope.doSearch = function(){
      $http({
        method: 'GET',
        url:'https://api.flickr.com/services/rest/',
        params:{
        method: 'flickr.photos.search',
        format: 'json',
        text: $scope.search,
        api_key: '15b6709e54ae9bc22a00b3cbf8d48eec',
        nojsoncallback:1
        }
      }).success(function(data)
      {
        $scope.photos = data;
      }).error(function(error){console.error(error);
      });
  };
    
  } ]);
  })();
  