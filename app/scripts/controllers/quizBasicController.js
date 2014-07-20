'use strict';

/**
 * @ngdoc function
 * @name quizModule.controller:QuizBasicController
 * @description
 * # QuizBasicController
 * Controller of the quizModule
 */
angular.module('quizModule')
  .controller('QuizBasicController',
  function ($scope, quizBasicFactory) {
    var createResults;
    $scope.title = null; // quiz title
    $scope.quiz = []; // quiz questions
    $scope.results = []; // user results

    quizBasicFactory.get(function (data) {
      $scope.title = data.title;
      $scope.quiz = data.questions;
      createResults();
    });

    // prepare array of result objects
    createResults = function () {
      var len = $scope.quiz.length;
      for (var i = 0; i < len; i++) {
        $scope.results.push({
          _id:        $scope.quiz[i]._id,
          answer:     $scope.quiz[i].answer,
          userChoice: null,
          correct:    null
        });
      }
    };

    // assign and check user's choice
    $scope.checkUserChoice = function (question, userChoice) {
      // assign the user's choice to userChoice
      $scope.results[question - 1].userChoice = userChoice;

      // check the user's choice against the answer
      if ($scope.results[question - 1].answer === userChoice) {
        $scope.results[question - 1].correct = 'Correct';
      } else {
        $scope.results[question - 1].correct = 'Incorrect';
      }
    };

    // only show results if all questions are answered
    $scope.checkQuizCompleted = function () {
      var len = $scope.results.length;
      for (var i = 0; i < len; i++) {
        if ($scope.results[i].userChoice === null) {
          return true;
        }
      }
      return false;
    };
  });
