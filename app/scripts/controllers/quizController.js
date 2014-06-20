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

    quizFactory.get(function (data) {
      $scope.quiz = data.questions;
    });

    $scope.responseMultipleChoice = "";
    $scope.color = 'red';
    $scope.fontWeight = 'normal';
    $scope.checkMultipleChoice = function (answer, userChoice) {
      if (answer == userChoice) {
        $scope.responseMultipleChoice = "Correct!";
        $scope.color = 'seagreen';
        $scope.fontWeight = 'bold';
      } else {
        $scope.responseMultipleChoice = "Incorrect";
        $scope.color = 'red';
        $scope.fontWeight = 'normal';
      }
    };

    $scope.filteredQuestion = function (questionId) {
      return filterFilter($scope.quiz, {_id: questionId});
    };
  });
