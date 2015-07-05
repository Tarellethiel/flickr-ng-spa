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
       
//shuffle hottag list
    var shuffle = function(array) {
    var counter = array.length, temp, index;
    while (counter > 0) {
        index = Math.floor(Math.random() * counter);
        counter--;
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
};

$scope.shuffle=shuffle(array);
$scope.topPhotoTags=array;
        
      }).error(function(error){console.error(error);
      });
   }();

    $scope.doSearch = function(pictureDate){
     if (pictureDate=="today"){
       var newDate = new Date();
       pictureDate=formatDate(newDate);
     }
     else if (pictureDate=="month"){
     var newDate = new Date();
     pictureDate=formatDate(newDate, pictureDate);
     }
     else {pictureDate="";}
     
      $http({
        method: 'GET',
        url:'https://api.flickr.com/services/rest/',
        params:{
        method: 'flickr.photos.search',
        format: 'json',
        text: $scope.searchText,
        api_key: '15b6709e54ae9bc22a00b3cbf8d48eec',
        nojsoncallback:1,
        min_upload_date:pictureDate
        }
      }).success(function(data)
      {
        $scope.photos = data;
      }).error(function(error){console.error(error);
      });
  };
  
  
  function formatDate(date,filter) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if(filter=='month') {day='01';}
    return [year, month, day].join('-');
}

   }]);
   })();
