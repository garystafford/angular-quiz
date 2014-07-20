'use strict';

/**
 * @ngdoc function
 * @name quizModule.controller:QuizAdvancedController
 * @description
 * # QuizAdvancedController
 * Controller of the quizModule
 */
angular.module('quizModule')
  .controller('QuizAdvancedController',
  function ($scope, quizAdvancedFactory, filterFilter) {
    var createResults;
    $scope.title = null; // quiz title
    $scope.quiz = []; // quiz questions
    $scope.results = []; // user results

    quizAdvancedFactory.get(function (data) {
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

    // used for multiple correct type questions
    $scope.checkUserMultiCorrectChoice = function (question, userChoice) {
      // create blank array
      if ($scope.results[question - 1].userChoice === null) {
        $scope.results[question - 1].userChoice = [];
      }

      // find choice, if not there the add or if there remove
      var pos = $scope.results[question - 1].userChoice.indexOf(userChoice);
      if (pos < 0) {
        $scope.results[question - 1].userChoice.push(userChoice);
      } else {
        $scope.results[question - 1].userChoice.slice(pos, 1);
      }

      // check the user's choice against the answer
      var answer = JSON.stringify($scope.quiz[question - 1].answer.sort());
      var choice = JSON.stringify($scope.results[question - 1].userChoice.sort());

      if (answer === choice) {
        $scope.results[question - 1].correct = true;
      } else {
        $scope.results[question - 1].correct = false;
      }
    };

    // used for multiple choice and true-false type questions
    $scope.checkUserChoice = function (question, userChoice) {
      // assign the user's choice to userChoice
      $scope.results[question - 1].userChoice = userChoice;

      // check the user's choice against the answer
      if ($scope.results[question - 1].answer === userChoice) {
        $scope.results[question - 1].correct = true;
      } else {
        $scope.results[question - 1].correct = false;
      }
    };

    // find a specific question
    $scope.filteredQuestion = function (questionId) {
      return filterFilter($scope.quiz, {_id: questionId});
    };
  });
