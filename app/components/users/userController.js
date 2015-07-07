 (function(){
   'use strict';
 angular.module('flickrNgSpaApp')
  .controller('userController', ['sharedScope', '$scope', '$http', '$routeParams',function(sharedScope, $scope, $http, $routeParams){
      
      $scope.$watch(function () {
      return sharedScope.getFilter();
    },
      function (newValue, oldValue) {
        if (newValue !== oldValue) $scope.filter = newValue;
      });

      $http({
        method: 'GET',
        url:'https://api.flickr.com/services/rest/',
        params:{
        method: 'flickr.people.getPhotos',
        format: 'json',
        api_key: '15b6709e54ae9bc22a00b3cbf8d48eec',
        nojsoncallback:1,
		    user_id: $routeParams.nsid
        }
      }).success(function(data)
      {
        $scope.userPhotos = data;
      }).error(function(error){console.error(error);
      });
      
        $http({
        method: 'GET',
        url:'https://api.flickr.com/services/rest/',
        params:{
        method: 'flickr.people.getInfo',
        format: 'json',
        api_key: '15b6709e54ae9bc22a00b3cbf8d48eec',
        nojsoncallback:1,
		    user_id: $routeParams.nsid
        }
      }).success(function(data)
      {
        $scope.userInfo = data;
      }).error(function(error){console.error(error);
      });
  
  
    
  } ]);
  })();
  