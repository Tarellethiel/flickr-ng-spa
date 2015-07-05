 (function(){
   'use strict';
 angular.module('flickrNgSpaApp')
  .controller('homeController', ['$scope', '$http','$q', function($scope, $http, $q){
$scope.getHttp=function(){
  var defer= $q.defer();
  
       $http({
        method: 'GET',
        url:'https://api.flickr.com/services/rest/',
        params:{
        method: 'flickr.photos.getRecent',
        format: 'json',        
        api_key: '15b6709e54ae9bc22a00b3cbf8d48eec',
        nojsoncallback:1,
        per_page:20,
 
        }
      }).success(function(data, status, headers, config)
      { defer.resolve(data);
        $scope.photos = data;
      }).error(function(data, status, headers, config){ defer.reject();
            });
            return defer.promise;
      }();
  } ]);
  })();
  
  
  