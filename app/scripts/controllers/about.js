'use strict';

/**
 * @ngdoc function
 * @name angulardataApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angulardataApp
 */
angular.module('angulardataApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate', 'AngularJS', 'Karma'
    ];
  });
