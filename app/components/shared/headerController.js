(function () {
  'use strict';
  angular.module('flickrNgSpaApp')
    .controller('headerController', ['sharedScope', '$scope', '$location', function (sharedScope, $scope, $location) {
    {
      $scope.sharedScope = sharedScope;
      $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
      };
    }
  }]);
})();