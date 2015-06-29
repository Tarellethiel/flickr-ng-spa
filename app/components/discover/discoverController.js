  (function(){
   'use strict';
   angular.module('flickrNgSpaApp')
  .controller('discoverController', ['$scope', '$http', function($scope, $http ){
    
      $scope.doHotTags=function(){
      $http({
        method: 'GET',
        url:'https://api.flickr.com/services/rest/',
        params:{
        method: 'flickr.tags.getHotList',
        format: 'json',
        api_key: '15b6709e54ae9bc22a00b3cbf8d48eec',
        nojsoncallback:1
        }
      }).success(function(data)
      {
        $scope.photoTags = data;
        var array=[];
        array=$scope.photoTags.hottags.tag;
        //$scope.topPhotoTags = $scope.photoTags.hottags.tag;
        
function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
shuffle(array);

$scope.topPhotoTags=array;
        
      }).error(function(error){console.error(error);
      });
   }();
    
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
 //    $scope.setCurrentPhoto = function(photo) {
 //     Photo.setPhoto(photo);
//    };
  }]);
  
  
  })();
