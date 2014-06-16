'use strict';

/**
 * @ngdoc function
 * @name angulardataApp.controller:QuizCtrl
 * @description
 * # QuizCtrl
 * Controller of the angulardataApp
 */
angular.module('angulardataApp')
  .controller('QuizCtrl', function ($scope, quizFactory) {
    $scope.quiz = {};
    quizFactory.get(function (data) {
      $scope.quiz = data.questions;
    });
  });
