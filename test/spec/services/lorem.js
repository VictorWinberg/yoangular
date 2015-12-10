'use strict';

describe('Service: lorem', function () {

  // load the service's module
  beforeEach(module('yoangularApp'));

  // instantiate service
  var lorem;
  beforeEach(inject(function (_lorem_) {
    lorem = _lorem_;
  }));

  it('should do something', function () {
    expect(!!lorem).toBe(true);
  });

});
