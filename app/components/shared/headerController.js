(function () {
  'use strict';
  angular.module('flickrNgSpaApp')
    .controller('headerController', ['sharedScope', '$scope', '$location', function (sharedScope, $scope, $location) {
    {
      $scope.Filter='';
      $scope.$watch('filter', function(newValue, oldValue)
        {
          if(newValue!==oldValue) sharedScope.setFilter(newValue);
        });
      $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
      };
    }
  }]);
})();