'use strict';

describe('Controller: discoverController', function () {
  var $rootScope,
    $scope,
    controller;

  beforeEach(function () {
    module('flickrNgSpaApp');


    inject(function ($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      controller = $injector.get('$controller')('discoverController',
        { $scope: $scope });
    });
  });


  describe("Init", function () {
    it('sets the name', function () {
      expect($scope.name).toBe('Superman');
    });
  });
  // describe('shuffle array of tags', function () {
  //  it('shuffle array', function () {
  //      var tags = ['tag1', 'tag2', 'tag3'];
  //      var shuffledTags = $scope.shuffle(['tag1', 'tag2', 'tag3']);
  //      // expect(shuffledTags).not.toEqual(['tag1', 'tag2', 'tag3']);
  //   expect(shuffledTags).toBe('defined');
  //   
    });
  });
});


  // describe('shuffle array of tags', function () {
  //   it('Should shuffle tags', function () {
  //     var $scope = {};
  //     var controller = $controller('discoverController', {
  //       $scope: $scope
  //     });
  //     var tags = ['tag1', 'tag2', 'tag3'];
  //     var shuffledTags = $scope.shuffle(tags);
  //     expect(shuffledTags).not.toEqual(['tag1', 'tag2', 'tag3']);
  //   });
  // });

  // describe('shuffle array of tags', function () {
  //   it('shuffle array', function () {
  //     var tags = ['tag1', 'tag2', 'tag3'];
  //     var shuffledTags = scope.shuffle(tags);
  //     expect(shuffledTags).not.toEqual(['tag1', 'tag2', 'tag3']);
  //   });
  // });

  // describe('controller exists', function () {
  //   it('exists', function () {
  //     expect($controller).not.toBeNull();
  //   });
  // }); 



  // it('Should be able to display hot tags', function () {

  //     var testSearchResults = {
  //     page: 1,
  //     pages: 4483,
  //     perpage: 2,
  //     photo: [
  //         {
  //             farm: 6,
  //             id: "15246462712",
  //             isfamily: 0,
  //             isfriend: 0,
  //             ispublic: 1,
  //             owner: "31600622@N06",
  //             secret: "fd242a9b99",
  //             server: "5585",
  //             title: "P1040172"
  //         },
  //         {
  //             farm: 6,
  //             id: "15246462713",
  //             isfamily: 0,
  //             isfriend: 0,
  //             ispublic: 1,
  //             owner: "31600622@N06",
  //             secret: "fd242a9b99",
  //             server: "5585",
  //             title: "P1040174"
  //         }
  //     ]
  // };
          
  //       var testHotTags = {
  //         hottags:
  //         {
  //           period: "day",
  //           count: 5,
  //           tag: [
  //             { score: 100, _content: "feb23"},
  //             { score: 97, _content: "whitenight" },
  //             { score: 95, _content: "whitenightmelbourne" },
  //             { score: 94, _content: "farligt" },
  //             { score: 93, _content: "avstand" }
  //           ]
  //         }
  //       };
  //             
  //             var photo = testSearchResults['photo'][0];
  //             expect(scope.getImageUrl(photo)).toBe('https://farm6.staticflickr.com/5585/15246462712_fd242a9b99_z.jpg');
  //         });
  // 
  //         it('Should be able to construct the correct query to fire to flickr, given a search text and API key', function () {
  //             expect(scope.constructFlickrQuery('search_text', 'some_api_key')).toBe('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=some_api_key&text=search_text&per_page=5&page=1&format=json&nojsoncallback=1');
  //         });
  // 

