'use strict';

angular.module('flickrNgSpaApp')
  .factory('Photo', function ($filter) {
    return {
      photo: '',
      setPhoto: function (p) {
        var filter = $filter('flickrURL');
        this.photo = filter(p, 'z');
      }
    };
  });
