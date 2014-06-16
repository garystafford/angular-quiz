'use strict';

/**
 * @ngdoc directive
 * @name angulardataApp.directive:quizDirective
 * @description
 * # quizDirective
 */
angular.module('angulardataApp')
  .directive('quizMultiplechoice', function () {
    return {
      restrict:    'E',
      templateUrl: 'scripts/partials/multiple-choice.html'
    };
  });
