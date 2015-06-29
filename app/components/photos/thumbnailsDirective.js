'use strict';

angular.module('flickrNgSpaApp')
  .directive('thumbnails', function () {
    return {
      restrict: 'E',
      templateUrl: 'components/photos/thumbnails.html',
      replace: true,
      scope: {
        photos: '=',
        loading: '=',
        link: '&'
      }
    };
  });
  

