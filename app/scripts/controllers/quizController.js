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
    $scope.quiz = {};
    $scope.results = [];

    quizFactory.get(function (data) {
      $scope.quiz = data.questions;
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

    $scope.responseMultipleChoice = "";
    $scope.color = 'red';
    $scope.checkMultipleChoice = function (question, userChoice) {
      $scope.results[question - 1].userChoice = userChoice;

      if ($scope.results[question - 1].answer == userChoice) {
        $scope.results[question - 1].correct = true;
      } else {
        $scope.results[question - 1].correct = false;
      }
    };

    $scope.filteredQuestion = function (questionId) {
      return filterFilter($scope.quiz, {_id: questionId});
    };
  });
