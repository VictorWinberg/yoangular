'use strict';

describe('Controller: ExperimentCtrl', function () {

  // load the controller's module
  beforeEach(module('yoangularApp'));

  var ExperimentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExperimentCtrl = $controller('ExperimentCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExperimentCtrl.awesomeThings.length).toBe(3);
  });
});
