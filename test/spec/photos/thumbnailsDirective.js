'use strict';

describe('Directive: thumbnailsDirective', function () {

  // load the directive's module
  beforeEach(module('flickrNgSpaApp'));

  var element=angular.element('<thumbnails/>');
  inject(function ($rootScope, $compile) {
   var scope = $rootScope.$new();
   scope.name=name;
   $compile(element)(scope);
   scope.$digest();
});

it('get element', function(){
  expect(element.text()).toBe("");
});
  

});