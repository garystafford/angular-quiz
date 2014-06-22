'use strict';

describe('Controller: QuizCtrl', function () {

  // load the controller's module
  beforeEach(module('angulardataApp'));

  var quizController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    quizController = $controller('QuizCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of questions to the scope', function () {
    expect(scope.quiz = data.questions.length).toBe(10);
  });
});
