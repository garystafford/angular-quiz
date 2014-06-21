'use strict';

/**
 * @ngdoc directive
 * @name angulardataApp.directive:quizMultiChoiceDirective
 * @description
 * # quizMultiCorrectDirective
 */
angular.module('angulardataApp')
  .directive('quizMulticorrect', function () {
    return {
      scope:       {
        filterBy: '='
      },
      restrict:    'E',
      templateUrl: '/scripts/partials/quiz-multicorrect.html'
    };
  });
