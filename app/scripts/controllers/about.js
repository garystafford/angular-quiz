'use strict';

/**
 * @ngdoc function
 * @name quizModule.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the quizModule
 */
angular.module('quizModule')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate', 'AngularJS', 'Karma'
    ];
  });
