describe('Controller: homeController', function () {
  var $rootScope,
    $scope,
    controller;

  beforeEach(function () {
    module('flickrNgSpaApp');


    inject(function ($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      controller = $injector.get('$controller')('homeController',
        { $scope: $scope });
    });
  });


  
});