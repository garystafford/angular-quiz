'use strict';

/**
 * @ngdoc function
 * @name angulardataApp.controller:QuizCtrl
 * @description
 * # QuizCtrl
 * Controller of the angulardataApp
 */
angular.module('angulardataApp')
  .controller('QuizCtrl', function ($scope, quizFactory, filterFilter) {
    $scope.quiz = {}; // quiz questions
    $scope.results = []; // user results

    quizFactory.get(function (data) {
      $scope.quiz = data.questions;

      // prepare array of result objects
      var len = $scope.quiz.length;
      for (var i = 0; i < len; i++) {
        $scope.results.push({
          _id:        $scope.quiz[i]._id,
          answer:     $scope.quiz[i].answer,
          userChoice: null,
          correct:    null
        });
      }
    });

    // used for multiple correct type questions
    $scope.checkUserMultiCorrectChoice  = function (question, userChoice) {
      // assign answer value to results
      $scope.results[question - 1].userChoice = userChoice;

      // check the answer
      if ($scope.results[question - 1].answer == userChoice) {
        $scope.results[question - 1].correct = true;
      } else {
        $scope.results[question - 1].correct = false;
      }
    };

    // used for multiple choice and true-false type questions
    $scope.checkUserChoice = function (question, userChoice) {
      // assign answer value to results
      $scope.results[question - 1].userChoice = userChoice;

      // check the answer
      if ($scope.results[question - 1].answer == userChoice) {
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
