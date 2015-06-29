 (function(){
   'use strict';
 angular.module('flickrNgSpaApp')
  .controller('headerController', ['$scope', '$location', function($scope, $location){
    
{ 
    $scope.isActive = function (viewLocation) { 
        console.log(viewLocation + ' i ' + $location.path());
        return viewLocation === $location.path();
    };
}
    
  } ]);
  })();