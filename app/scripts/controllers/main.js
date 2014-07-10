'use strict';

/**
 * @ngdoc function
 * @name quizModule.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quizModule
 */
angular.module('quizModule')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate', 'AngularJS', 'Karma'
    ];
  });
