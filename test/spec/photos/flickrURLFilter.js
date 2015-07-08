'use strict';

describe('Filter: flickrURLFilter', function () {

  // load the filter's module
  beforeEach(module('flickrNgSpaApp'));

  // initialize a new instance of the filter before each test
  var $filter;
  beforeEach(inject(function (_$filter_) {
    $filter = _$filter_;
   
  }));
  
  it('returns null',function(){
    var input={
      farm:"1",
      server:"2",
      id:"3",
      secret:"4",
      dimension:"q"
   }
    
    var flickrURL=$filter('flickrURLFilter');
    expect(flickrURL(input, q)).toEqual(3);
  })

});