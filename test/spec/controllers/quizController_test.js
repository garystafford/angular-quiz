'use strict';

describe('Controller: QuizCtrl', function () {

  // load the controller's module
  beforeEach(module('angulardataApp'));

  var QuizCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expect('GET', './data/quiz.json').respond({
      "questions": [
        {
          "_id":      1,
          "question": "Is this a true-false test?",
          "type":     "True-false",
          "answer":   true
        },
        {
          "_id":      2,
          "question": "Which is a type of test?",
          "type":     "Multiple choice",
          "choices":  [
            {
              "_id":    1,
              "choice": "unit-test"
            },
            {
              "_id":    2,
              "choice": "wrong answer"
            },
            {
              "_id":    3,
              "choice": "also wrong answer"
            },
            {
              "_id":    4,
              "choice": "also wrong answer"
            }
          ],
          "answer":   1
        }
      ]
    });

    scope = $rootScope.$new();
    QuizCtrl = $controller('QuizCtrl', {
      $scope: scope
    });

    $httpBackend.flush();
  }));

  it('should find 2 questions fetched from xhr', function () {
    expect(scope.quiz.length).toEqual(2);
  });

  it('should find mock question 1 fetched from xhr', function () {
    expect(scope.quiz[0]).toEqual({
      "_id":      1,
      "question": "Is this a true-false test?",
      "type":     "True-false",
      "answer":   true
    });
  });
});