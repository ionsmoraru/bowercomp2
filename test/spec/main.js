'use strict';

describe('MyApp', function () {

  // load the module
  beforeEach(module('bwtstcomp2'));

  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should be true', function () {
    expect(3).toBe(3);
  });
});
