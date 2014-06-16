'use strict';

/**
 * @ngdoc function
 * @name angulardataApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angulardataApp
 */
angular.module('angulardataApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate', 'AngularJS', 'Karma'
    ];
  });
