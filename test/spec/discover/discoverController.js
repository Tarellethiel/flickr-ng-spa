'use strict';

describe('Controller: discoverController', function () {

  // load the controller's module
  beforeEach(module('flickrNgSpaApp'));

  var discoverController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    discoverController = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});