'use strict';

describe('Controller: quizController', function () {

  // load the controller's module
  beforeEach(module('angulardataApp'));

  var quiz_controller,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    quiz_controller = $controller('quiz-controller', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
