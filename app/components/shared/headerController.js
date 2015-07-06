(function () {
  'use strict';
  angular.module('flickrNgSpaApp')
    .controller('headerController', ['$scope', '$location', function ($scope, $location) {
    {
      $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
      };
    }
  }]);
})();