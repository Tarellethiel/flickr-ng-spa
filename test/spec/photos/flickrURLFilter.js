'use strict';

describe('Filter: flickrURLFilter', function () {

  // load the filter's module
  beforeEach(module('flickrNgSpaApp'));

  // initialize a new instance of the filter before each test
  var flickrURL;
  beforeEach(inject(function ($filter) {
    flickrURL = $filter('flickrURLDirective');
  }));

});