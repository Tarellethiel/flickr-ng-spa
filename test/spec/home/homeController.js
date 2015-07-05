// 'use strict';
// 
// beforeEach(module('flickrNgSpaApp'));
//    
//     describe('homeController', function () {
// 
//         var $httpBackend,
//             expectedUrl = 'https://api.flickr.com/services/rest/',
//             promise,
//             successCallback,
//             errorCallback,
//             httpController;
// 
//         beforeEach(inject(function ($rootScope, $controller, _$httpBackend_) {
//             $httpBackend = _$httpBackend_;
//             scope = $rootScope.$new();
//             successCallback = jasmine.createSpy();
//             errorCallback = jasmine.createSpy();
//             httpController = $controller('homeController', {
//                 '$scope': scope
//             });
//         }));
// 
//         afterEach(function() {
//             $httpBackend.verifyNoOutstandingExpectation();
//             $httpBackend.verifyNoOutstandingRequest();
//         });
// 
//         it('returns http requests successfully and resolves the promise', function () {
//             var data = '{"translationKey":"translationValue"}';
//             expect(homeController).toBeDefined();
//             $httpBackend.expectGET(expectedUrl).respond(200, data);
//             promise = scope.getHttp();
//             promise.then(successCallback, errorCallback);
// 
//             $httpBackend.flush();
// 
//             expect(successCallback).toHaveBeenCalledWith(angular.fromJson(data));
//             expect(errorCallback).not.toHaveBeenCalled();
//         });
// 
//         it('returns http requests with an error and rejects the promise', function () {
//             $httpBackend.expectGET(expectedUrl).respond(500, 'Oh no!!');
//             promise = scope.getHttp();
//             promise.then(successCallback, errorCallback);
// 
//             $httpBackend.flush();
// 
//             expect(successCallback).not.toHaveBeenCalled();
//             expect(errorCallback).toHaveBeenCalled();
//         });
//     });
//     
